import RobotProfileImage from '../assets/robot.png'; //import segala file dengan fitur Vite
import UserProfileImage from '../assets/user.png';
import './ChatMessage.css';

export function ChatMessageComponent({ message, sender }) {
        return (
        <div className={sender==='user' ? 'chat-message-user' : 'chat-message-robot'} >
          {/* guard (&&) operator in javascript */}
          {sender === 'robot' && (
            <img src={RobotProfileImage} alt="robot icon" className="chat-message-profile" />
          )}
          <div className="chat-message-text">{message}</div>
          {sender === 'user' && (
            <img src={UserProfileImage} alt="user icon" className="chat-message-profile" />
          )}

        </div>
      );
    }