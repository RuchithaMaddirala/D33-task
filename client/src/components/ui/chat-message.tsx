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
          ? 'bg-blue-50 border border-blue-200 self-start' 
          : 'bg-primary text-white self-end'
      }`}
    >
      <p className={`text-sm ${isUser ? 'text-gray-800' : 'text-white'}`}>
        {message.content}
      </p>
      <span className={`text-xs mt-1 ${isUser ? 'text-gray-500' : 'text-blue-200'}`}>
        {isUser ? 'You' : 'Copilot'} • {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
      </span>
    </div>
  );
};

export default ChatMessage;
