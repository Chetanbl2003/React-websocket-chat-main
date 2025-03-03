import React from "react";

interface MessageProps {
  name: string;
  text: string;
  isSelf: boolean;
  isGroup: boolean;
}

const Message: React.FC<MessageProps> = ({ name, text, isSelf, isGroup }) => {
  return (
    <li className={`message-container ${isSelf ? "self" : "other"}`}>
      <div className={`message ${isSelf ? "self" : "other"}`}>
        
        {isGroup && <span className="name">{isSelf ? "Me" : name}</span>}
        <span className="text">{text}</span>
      </div>
    </li>
  );
};

export default Message;
