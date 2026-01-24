/* SitePulse Chat Widget - Vanilla JS Implementation */

(function() {
    // 1. Configuration & State
    const CONFIG = {
        apiEndpoint: '/api/chat',
        suggestedMessages: ["Qui est le fondateur ?", "Quels sont vos services ?"]
    };

    let chatHistory = [];
    let isOpen = false;

    // 2. DOM Elements Construction
    const container = document.createElement('div');
    container.id = 'sitepulse-chat-container';
    
    container.innerHTML = `
        <button id="sp-chat-trigger" title="Chat with SitePulse">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
        </button>
        <div id="sp-chat-window">
            <div class="sp-chat-header">
                <div class="sp-chat-title">
                    <div class="sp online-dot"></div>
                    <span>SitePulse Assistant</span>
                </div>
                <button id="sp-chat-close" style="background:transparent; border:none; color:#64748b; cursor:pointer;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
            </div>
            <div id="sp-chat-messages">
                <div class="sp-message assistant">
                    Bonjour ! Je suis l'assistant intelligent de SitePulse. Comment puis-je vous aider aujourd'hui ?
                </div>
            </div>
            <div class="sp-chat-input-container">
                <div class="sp-input-wrapper">
                    <input type="text" id="sp-chat-input" placeholder="Écrivez votre message..." autocomplete="off">
                    <button id="sp-chat-send" disabled>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polyline points="22 2 15 22 11 13 2 9 22 2"/></svg>
                    </button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(container);

    const trigger = document.getElementById('sp-chat-trigger');
    const window = document.getElementById('sp-chat-window');
    const closeBtn = document.getElementById('sp-chat-close');
    const input = document.getElementById('sp-chat-input');
    const sendBtn = document.getElementById('sp-chat-send');
    const messagesArea = document.getElementById('sp-chat-messages');

    // 3. Logic Functions
    function toggleChat() {
        isOpen = !isOpen;
        window.classList.toggle('open', isOpen);
    }

    function addMessage(role, content) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `sp-message ${role}`;
        msgDiv.textContent = content;
        messagesArea.appendChild(msgDiv);
        messagesArea.scrollTop = messagesArea.scrollHeight;
    }

    async function handleSend() {
        const text = input.value.trim();
        if (!text) return;

        input.value = '';
        sendBtn.disabled = true;
        addMessage('user', text);

        // Typing indicator
        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'sp-typing';
        typingIndicator.textContent = 'Assistant réfléchit...';
        messagesArea.appendChild(typingIndicator);

        try {
            const response = await fetch(CONFIG.apiEndpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: text, history: chatHistory })
            });

            const data = await response.json();
            messagesArea.removeChild(typingIndicator);

            if (data.text) {
                addMessage('assistant', data.text);
                chatHistory.push({ role: 'user', parts: [{ text: text }] });
                chatHistory.push({ role: 'model', parts: [{ text: data.text }] });
            } else {
                throw new Error(data.error || 'Unknown error');
            }
        } catch (err) {
            console.error('Chat error:', err);
            messagesArea.removeChild(typingIndicator);
            addMessage('assistant', "Désolé, je rencontre une petite difficulté. Veuillez réessayer plus tard.");
        } finally {
            sendBtn.disabled = false;
        }
    }

    // 4. Events
    trigger.addEventListener('click', toggleChat);
    closeBtn.addEventListener('click', toggleChat);

    input.addEventListener('input', () => {
        sendBtn.disabled = !input.value.trim();
    });

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSend();
    });

    sendBtn.addEventListener('click', handleSend);

})();
