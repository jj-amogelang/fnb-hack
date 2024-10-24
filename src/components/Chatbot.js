// src/components/Chatbot.js
import React, { useState } from 'react';
import './Chatbot.css'; // Create a CSS file for styles

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim()) {
            // Add user message
            setMessages([...messages, { text: input, sender: 'user' }]);
            // Simulate AI response
            setTimeout(() => {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { text: `AI: You said "${input}"`, sender: 'ai' },
                ]);
            }, 1000);
            setInput('');
        }
    };

    return (
        <div className="chatbot-container">
            <div className="chat-window">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}`}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <div className="input-container">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                />
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    );
};

export default Chatbot;