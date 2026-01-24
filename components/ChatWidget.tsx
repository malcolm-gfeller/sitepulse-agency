import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';

interface Message {
  role: 'user' | 'model';
  parts: { text: string }[];
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      parts: [{ text: input }],
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: input,
          history: messages,
        }),
      });

      const data = await response.json();
      if (data.text) {
        setMessages((prev) => [
          ...prev,
          { role: 'model', parts: [{ text: data.text }] },
        ]);
      }
    } catch (error) {
      console.error('Chat error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[200]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-brand-cyan/20 to-brand-purple/20 border-b border-neutral-800 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Assistant SitePulse</h3>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-[10px] text-neutral-400">En ligne</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide"
            >
              {messages.length === 0 && (
                <div className="text-center py-10 space-y-2">
                  <p className="text-neutral-400 text-sm">Comment puis-je vous aider aujourd'hui ?</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {['Nos services', 'Qui sommes-nous ?', 'Contact'].map((q) => (
                      <button
                        key={q}
                        onClick={() => setInput(q)}
                        className="text-[11px] px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-neutral-300 hover:border-brand-cyan hover:text-brand-cyan transition-all"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                      m.role === 'user'
                        ? 'bg-brand-cyan text-black rounded-tr-none'
                        : 'bg-neutral-800 text-neutral-200 rounded-tl-none border border-neutral-700'
                    }`}
                  >
                    {m.parts[0].text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-neutral-800 p-3 rounded-2xl rounded-tl-none border border-neutral-700">
                    <Loader2 size={16} className="animate-spin text-brand-cyan" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-neutral-800 bg-neutral-900/50">
              <div className="relative flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Tapez votre message..."
                  className="flex-1 bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-brand-cyan transition-colors"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="bg-brand-cyan hover:bg-brand-cyan/80 disabled:opacity-50 text-black p-2 rounded-xl transition-all"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-brand-cyan rounded-full flex items-center justify-center shadow-lg text-black hover:bg-brand-cyan/90 transition-colors"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </div>
  );
};

export default ChatWidget;
