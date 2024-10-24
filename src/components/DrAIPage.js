import React, { useState } from 'react';
import './DrAIPage.css'; // Existing styles
import { FaCommentDots, FaMicrophone } from 'react-icons/fa';
import Chatbot from './Chatbot'; // Import the Chatbot component

const DrAIPage = () => {
    const [showChatbot, setShowChatbot] = useState(false);

    const handleTextOption = () => {
        setShowChatbot(true); // Show the chatbot
    };

    const handleVoiceOption = () => {
        // Logic for voice recording
    };

    return (
        <div className="dr-ai-container">
            <h1>Talk to Dr. AI</h1>
            <p>Select an option to communicate:</p>
            <div className="button-container">
                <button className="option-button" onClick={handleTextOption}>
                    <FaCommentDots /> Text
                </button>
                <button className="option-button" onClick={handleVoiceOption}>
                    <FaMicrophone /> Record
                </button>
            </div>
            {showChatbot && <Chatbot />} {/* Render the Chatbot if showChatbot is true */}
        </div>
    );
};

export default DrAIPage;