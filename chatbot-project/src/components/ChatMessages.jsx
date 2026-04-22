import { useEffect, useRef } from "react";
import { ChatMessage } from "./ChatMessage";
import "./ChatMessages.css";

const ChatMessages = ({ chatMessages }) => {
  const chatMessagesRef = useRef(null);
  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <div ref={chatMessagesRef} className="chat-messages-container">
      {chatMessages.map((msg) => {
        return (
          <ChatMessage key={msg.id} message={msg.message} sender={msg.sender} />
        );
      })}
    </div>
  );
};

export default ChatMessages;
