import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Loader2, Minimize2, Maximize2 } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Instructions for Gemini
const SYSTEM_PROMPT = `
You are a helpful AI assistant for SitePulse, a digital growth agency in Switzerland.
Your goal is to answer questions about SitePulse's services, team, and projects based on the page content.
Be professional, friendly, and concise.

Context about SitePulse:
- They provide custom web development (Ultra-fast sites).
- They specialize in UI/UX Design.
- They offer SEO and digital strategy.
- They are based in Switzerland.
- Main sections: Services (Strategy, Design, Development), Case Studies, Team, Contact.
`;

const Chatbox: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize Gemini
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || '');
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const chat = model.startChat({
        history: messages.map(msg => ({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.content }],
        })),
        generationConfig: {
          maxOutputTokens: 500,
        },
      });

      const result = await chat.sendMessage(messages.length === 0 ? `${SYSTEM_PROMPT}\n\nUser: ${userMessage}` : userMessage);
      const response = await result.response;
      const text = response.text();

      setMessages(prev => [...prev, { role: 'assistant', content: text }]);
    } catch (error) {
      console.error('Error calling Gemini:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Désolé, je rencontre une petite difficulté technique. Veuillez réessayer plus tard !" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              height: isMinimized ? '60px' : '500px'
            }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-[350px] bg-brand-black border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden mb-4 backdrop-blur-xl"
          >
            <div className="p-4 bg-gradient-to-r from-brand-purple/20 to-brand-cyan/20 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                <span className="font-semibold text-sm tracking-wide">SitePulse Assistant</span>
              </div>
              <div className="flex items-center gap-1">
                <button onClick={() => setIsMinimized(!isMinimized)} className="p-1 hover:bg-white/5 rounded-md transition-colors">
                  {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
                </button>
                <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/5 rounded-md transition-colors text-gray-400 hover:text-white">
                  <X size={18} />
                </button>
              </div>
            </div>
            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-4 hide-scrollbar bg-black/40">
                  {messages.length === 0 && (
                    <div className="text-center py-8">
                      <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-3 border border-white/10">
                        <MessageSquare className="text-brand-cyan" size={20} />
                      </div>
                      <p className="text-gray-400 text-sm">Comment puis-je vous aider aujourd'hui ?</p>
                    </div>
                  )}
                  {messages.map((msg, i) => (
                    <motion.div initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }} animate={{ opacity: 1, x: 0 }} key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-brand-purple text-white rounded-tr-none' : 'bg-white/5 text-gray-200 border border-white/10 rounded-tl-none'}`}>
                        {msg.content}
                      </div>
                    </motion.div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-white/5 p-3 rounded-2xl border border-white/10 rounded-tl-none">
                        <Loader2 className="animate-spin text-brand-cyan" size={18} />
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
                <div className="p-4 border-t border-white/10 bg-black/60">
                  <div className="relative flex items-center gap-2">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                      placeholder="Posez votre question..."
                      className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-brand-cyan/50 transition-colors"
                    />
                    <button onClick={handleSend} disabled={!input.trim() || isLoading} className="bg-brand-cyan hover:bg-brand-cyan/80 disabled:opacity-50 disabled:grayscale text-black p-2.5 rounded-xl transition-all shadow-[0_0_15px_rgba(166,237,221,0.2)]">
                      <Send size={18} />
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => { setIsOpen(true); setIsMinimized(false); }} className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${isOpen ? 'opacity-0 scale-0 pointer-events-none' : 'opacity-100 scale-100'} bg-gradient-to-tr from-brand-purple to-brand-cyan text-black`}>
        <MessageSquare size={24} />
      </motion.button>
    </div>
  );
};

export default Chatbox;
