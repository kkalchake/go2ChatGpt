# Unify Virtual Assistant - go2ChatGpt

Unify Virtual Assistant is a React-based (next.js) chatbot that helps users with various services such as 
- Allows users with no tech background to generate Unify Reports in any native language (Japanese, Hindu are in progress)
- Directing to confluence pages for setting up Unify environments
- Providing more information on specific topics
- This project integrates seamlessly into existing UI projects as a small chat option on the side. (Scroll for implementation instructions)
- In progress: Suggestions based on trained GenAi and conversation history

## Features

- Interactive chatbot with predefined options
- Customizable responses and options
- Easy integration into existing React projects
- Responsive design

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
   ```sh
   - git clone git@github.com:kkalchake/go2ChatGpt.git
   cd go2ChatGpt
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

## Running the Project Locally

1. Start the development server:
   ```sh
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Integration into Existing UI Project

To integrate the Unify Virtual Assistant into your existing React project, follow these steps:

1. **Copy the `Chatbot` component and its styles**:
   - Copy `components/Chatbot.js` to your project's `components` directory.
   - Copy `components/Chatbot.module.css` to your project's `components` directory.

2. **Import and use the `Chatbot` component**:
   ```javascript
   // In your main UI component file (e.g., App.js)
   import React, { useState } from 'react';
   import Chatbot from './components/Chatbot';
   import './App.css'; // Assuming you have a CSS file for your main UI

   const App = () => {
       const [showChatbot, setShowChatbot] = useState(false);

       const toggleChatbot = () => {
           setShowChatbot(!showChatbot);
       };

       return (
           <div className="App">
               <button onClick={toggleChatbot} className="chatbot-toggle-button">
                   {showChatbot ? 'Hide Chat' : 'Show Chat'}
               </button>
               {showChatbot && <Chatbot />}
           </div>
       );
   };

   export default App;
   ```

3. **Style the Chatbot and Toggle Button**:
   ```css
   /* In your App.css */
   .App {
       position: relative;
   }

   .chatbot-toggle-button {
       position: fixed;
       bottom: 20px;
       right: 20px;
       padding: 10px 20px;
       background-color: #007bff;
       color: white;
       border: none;
       border-radius: 5px;
       cursor: pointer;
   }

   .chatbot-toggle-button:hover {
       background-color: #0056b3;
   }

   .chatWindow {
       position: fixed;
       bottom: 60px;
       right: 20px;
       width: 300px;
       height: 400px;
       border: 1px solid #ccc;
       border-radius: 10px;
       background-color: #f9f9f9;
       box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
   }
   ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## Contact

For any questions or feedback, please contact [kkalchake](https://github.com/kkalchake).

---

This README provides an overview of the project, installation instructions, and steps to integrate the chatbot into an existing UI project.
