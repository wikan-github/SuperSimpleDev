import { useEffect, useRef } from "react";
import { ChatMessageComponent } from "./ChatMessageComponent";
import './ChatMessageList.css';

export function ChatMessageListComponent({chatMessages}) {
			const chatMessageListRef = useRef(null); //ref untuk container message list, 
			useEffect(()=> {
				// react useEffect will run this function, 
				// everytime the component is  after created or after updated

				//after ChatMessageListComponent is updated , 
				// we need to scroll down the content to show the newest message
				const containerElm =  chatMessageListRef.current;
				if (containerElm) {
					containerElm.scrollTop = containerElm.scrollHeight;
				}
			}, [chatMessages]);

			return (
				<div
					className="chat-message-list-container"
					ref={chatMessageListRef}
				>
					{
						chatMessages.map((msg) => {
							return (
								<ChatMessageComponent
									message={msg.message}
									sender={msg.user}
									key={msg.id}
								/>
							);
						})
					}
				</div>
			);
		}