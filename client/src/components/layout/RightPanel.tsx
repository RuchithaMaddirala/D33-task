import React, { forwardRef, useRef } from "react";
import { useDashboard } from "@/context/DashboardContext";
import ChatMessage from "@/components/ui/chat-message";

interface RightPanelProps {
  style?: React.CSSProperties;
}

const RightPanel = forwardRef<HTMLDivElement, RightPanelProps>(({ style }, ref) => {
  const { messages, addMessage } = useDashboard();
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll to bottom when new messages are added
  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
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
      className="border-l border-slate-200 flex flex-col h-full bg-gradient-to-b from-white to-purple-50"
      style={style}
    >
      {/* Header */}
      <div className="p-5 border-b border-slate-200 bg-white">
        <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
          Dashboard Copilot
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Ask questions about your data and get insights
        </p>
      </div>
      
      {/* Messages */}
      <div className="flex-1 flex flex-col p-4 space-y-4 overflow-y-auto">
        {messages.map(message => (
          <ChatMessage key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input */}
      <div className="mt-auto p-4 border-t border-slate-200 bg-white">
        <form onSubmit={handleSubmit} className="relative">
          <input
            ref={inputRef}
            type="text"
            placeholder="Ask about your dashboard..."
            className="w-full p-4 pr-12 border border-slate-200 rounded-xl shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
          />
          <button 
            type="submit"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-primary to-primary/80 rounded-lg text-white flex items-center justify-center hover:shadow-md transition-all"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </form>
      </div>
    </aside>
  );
});

RightPanel.displayName = "RightPanel";

export default RightPanel;
