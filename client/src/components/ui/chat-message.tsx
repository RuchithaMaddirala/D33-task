import React from "react";
import { ChatMessage as ChatMessageType } from "@/types";

interface ChatMessageProps {
  message: ChatMessageType;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.sender === 'user';
  
  return (
    <div 
      className={`flex flex-col max-w-[85%] p-4 rounded-2xl shadow-sm ${
        isUser 
          ? 'bg-white border border-slate-200 self-start' 
          : 'bg-gradient-to-r from-primary to-primary/80 text-white self-end'
      }`}
    >
      <p className={`text-sm ${isUser ? 'text-slate-700' : 'text-white'}`}>
        {message.content}
      </p>
      <span className={`text-xs mt-2 ${isUser ? 'text-slate-400' : 'text-white/70'}`}>
        {isUser ? 'You' : 'Copilot'} • {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
      </span>
    </div>
  );
};

export default ChatMessage;
