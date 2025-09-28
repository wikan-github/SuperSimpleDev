import { useState,useRef,useEffect } from 'react';

import './App.css'; //import segala file dengan fitur Vite 

import {ChatInput} from './components/ChatInput';
import { ChatMessageListComponent } from './components/ChatMessageListComponent.jsx';







function App() {
						//javascript array destructuring
			const [chatMessagesArray, setChatMessages] = useState(
				[
					{
						message: 'hello chatbot',
						user: 'user',
						id: '1'
					},
					{
						message: 'hello, how can i help you',
						user: 'robot',
						id: '2'
					},
					{
						message: 'can you get me todays date ?',
						user: 'user',
						id: '3'
					},
					{
						message: 'Today is september 24',
						user: 'robot',
						id: '4'
					}
				]
			);
			/**
			 * React.useState return array with two index
			 *first index of React.useState is the value (getter)
			 *second index of React.useState is the setter used for updating data, 
			 *in react we shpuldnot update the state directly, instead we use the setter updateChatMessages, 
			 *this also tell React that the data is changed 
			*/
			// const [chatMessagesArray, updateChatMessages] = array;
			// const chatMessagesArray = array[0]; //
			// const updateChatMessages = array[1];
			// const chatMessagesArray =
			return (
				<div className="app-container">
					
					<ChatMessageListComponent chatMessages={chatMessagesArray} />
					<ChatInput 
						chatMessages= {chatMessagesArray}
						setChatMessages={setChatMessages}
					/>
				</div>
			);
		}

export default App
