import React from "react";
import { ChatMessage as ChatMessageType } from "@/types";

interface ChatMessageProps {
  message: ChatMessageType;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.sender === 'user';
  
  return (
    <div 
      className={`flex flex-col max-w-[85%] p-3 rounded-lg ${
        isUser 
          ? 'bg-slate-100 self-start' 
          : 'bg-blue-50 self-end ml-auto'
      }`}
    >
      <p className="text-sm text-slate-700">{message.content}</p>
    </div>
  );
};

export default ChatMessage;
