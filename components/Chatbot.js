// components/Chatbot.js
import React, { useState } from 'react';
import styles from './Chatbot.module.css';

const Chatbot = () => {
    const [messages, setMessages] = useState([
        { text: 'Hi there! I am your Unify virtual assistant and can help you with below services:', options: ['Reports', 'Environment Setup', 'Learn More'] }
    ]);
    const [showPrompt, setShowPrompt] = useState(false);
    const [userInput, setUserInput] = useState('');

    const handleOptionClick = (option) => {
        if (option === 'Reports') {
            setMessages([...messages, { text: 'Please choose from below options:', options: ['Availability', 'Volume', 'techpend', 'custom report'] }]);
        } else if (option === 'custom report') {
            setMessages([...messages, { text: 'Please write what exactly you are looking for:' }]);
            setShowPrompt(true);
        } else {
            setMessages([...messages, { text: `You selected: ${option}` }]);
        }
    };

    const handleUserInput = (e) => {
        setUserInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessages([...messages, { text: userInput }]);
        setUserInput('');
        setShowPrompt(false);
    };

    return (
        <div className={styles.chatWindow}>
            <div className={styles.messages}>
                {messages.map((message, index) => (
                    <div key={index} className={styles.message}>
                        <p>{message.text}</p>
                        {message.options && message.options.map((option, idx) => (
                            <button key={idx} onClick={() => handleOptionClick(option)} className={styles.optionButton}>{option}</button>
                        ))}
                    </div>
                ))}
            </div>
            {showPrompt && (
                <form onSubmit={handleSubmit} className={styles.promptForm}>
                    <input type="text" value={userInput} onChange={handleUserInput} className={styles.inputField} />
                    <button type="submit" className={styles.sendButton}>Send</button>
                </form>
            )}
        </div>
    );
};

export default Chatbot;