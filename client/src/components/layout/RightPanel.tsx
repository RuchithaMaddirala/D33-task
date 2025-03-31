import React, { forwardRef, useRef } from "react";
import { useDashboard } from "@/context/DashboardContext";
import ChatMessage from "@/components/ui/chat-message";

interface RightPanelProps {
  style?: React.CSSProperties;
}

const RightPanel = forwardRef<HTMLDivElement, RightPanelProps>(({ style }, ref) => {
  const { messages, addMessage } = useDashboard();
  const inputRef = useRef<HTMLInputElement>(null);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputRef.current || !inputRef.current.value.trim()) return;
    
    const message = inputRef.current.value;
    addMessage(message);
    inputRef.current.value = '';
  };
  
  return (
    <aside 
      ref={ref}
      className="border-l border-slate-200 flex flex-col h-full bg-white"
      style={style}
    >
      {/* Header */}
      <div className="p-4 border-b border-slate-200">
        <h2 className="text-lg font-semibold text-slate-900">Dashboard Copilot</h2>
        <p className="text-sm text-slate-500">Ask questions about your data</p>
      </div>
      
      {/* Messages */}
      <div className="flex-1 flex flex-col p-4 space-y-4 overflow-y-auto">
        {messages.map(message => (
          <ChatMessage key={message.id} message={message} />
        ))}
      </div>
      
      {/* Input */}
      <div className="mt-auto p-4 border-t border-slate-200">
        <form onSubmit={handleSubmit} className="relative">
          <input
            ref={inputRef}
            type="text"
            placeholder="Ask about your dashboard..."
            className="w-full p-3 pr-10 border border-slate-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button 
            type="submit"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-blue-500"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </form>
      </div>
    </aside>
  );
});

RightPanel.displayName = "RightPanel";

export default RightPanel;
