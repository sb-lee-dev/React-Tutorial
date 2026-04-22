import { useState } from "react";
import { Chatbot } from "supersimpledev";
import "./ChatInput.css";

export const ChatInput = ({ setChatMessages }) => {
  const [inputText, setInputText] = useState("");
  const saveInputText = (event) => {
    setInputText(event.target.value);
  };

  const sendMessage = () => {
    setChatMessages((prev) => [
      ...prev,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ]);

    const response = Chatbot.getResponse(inputText);

    setChatMessages((prev) => [
      ...prev,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);

    setInputText("");
  };

  return (
    <div className="chat-input-container">
      <input
        className="chat-input"
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        value={inputText}
      />
      <button className="send-button" onClick={sendMessage}>
        Send
      </button>
    </div>
  );
};
