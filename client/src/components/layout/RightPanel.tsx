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
      className="border-l border-blue-200 flex flex-col h-full bg-white"
      style={style}
    >
      {/* Header */}
      <div className="p-4 border-b border-blue-200 bg-blue-50">
        <h2 className="text-lg font-semibold text-primary">
          Dashboard Copilot
        </h2>
        <p className="text-sm text-slate-600 mt-1">
          Ask questions about your data
        </p>
      </div>
      
      {/* Messages */}
      <div className="flex-1 flex flex-col p-4 space-y-4 overflow-y-auto bg-white">
        {messages.map(message => (
          <ChatMessage key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input */}
      <div className="mt-auto p-4 border-t border-blue-200 bg-blue-50">
        <form onSubmit={handleSubmit} className="relative">
          <input
            ref={inputRef}
            type="text"
            placeholder="Ask about your dashboard..."
            className="w-full p-3 pr-10 border border-blue-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 bg-white shadow-sm"
          />
          <button 
            type="submit"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-7 h-7 bg-primary text-white rounded-md flex items-center justify-center hover:bg-primary/90 transition-colors"
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
