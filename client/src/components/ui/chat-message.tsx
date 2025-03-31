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
          : 'bg-primary/10 self-end'
      }`}
    >
      <p className="text-sm text-slate-700">
        {message.content}
      </p>
      <span className="text-xs mt-1 text-slate-400">
        {isUser ? 'You' : 'Copilot'} • {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
      </span>
    </div>
  );
};

export default ChatMessage;
