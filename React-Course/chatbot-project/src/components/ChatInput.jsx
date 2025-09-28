import { useState } from 'react';
import { Chatbot} from 'supersimpledev';
import './ChatInput.css';

export function ChatInput({chatMessages, setChatMessages}) {
      const [inputText, setInputText] = useState('');
      function saveInputText(event) {
        setInputText(event.target.value);
      }
      function sendMessage() {
        /* 
        we replace the state data through the setter function setChatMessages
        first we copy the existing data using javascript spread operator
        then we add the new data at the end
        spread operator will create a copy of existing data and put inside the array
         */
        const newChatMessages = [
          ...chatMessages,
          {
            message: inputText,
            user: 'user',
            id: crypto.randomUUID()
          }
        ];

        setChatMessages(newChatMessages);

        //Chatbot object is define in external library defined in Chatbot.js	
        const response =  Chatbot.getResponse(inputText);
        setChatMessages([
          ...newChatMessages,
          {
            message: response,
            user: 'robot',
            id: crypto.randomUUID()
          }
        ]);

        setInputText(''); //kosongkan textbox
      }

      return (
        <div className="chat-input-container">
          <input
            type="text"
            id="txtMessage"
            placeholder="Send message to chat bot"
            size="50"
            value={inputText}
            onChange={saveInputText}
            className="chat-input"
          />
          <button
            className="send-button"
            onClick={sendMessage}
          >Send</button>
        </div>
      );
    }