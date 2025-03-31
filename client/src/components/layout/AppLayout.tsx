import React, { useRef, useState, useEffect } from "react";
import { useDashboard } from "@/context/DashboardContext";
import LeftPanel from "./LeftPanel";
import MiddlePanel from "./MiddlePanel";
import RightPanel from "./RightPanel";

const AppLayout: React.FC = () => {
  const { isCopilotVisible, toggleCopilot } = useDashboard();
  const [copilotWidth, setCopilotWidth] = useState(320);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const resizeHandleRef = useRef<HTMLDivElement>(null);
  
  // Handle resize functionality
  useEffect(() => {
    const rightPanel = rightPanelRef.current;
    const resizeHandle = resizeHandleRef.current;
    
    if (!rightPanel || !resizeHandle) return;
    
    let isResizing = false;
    let startX = 0;
    let startWidth = 0;
    
    const handleMouseDown = (e: MouseEvent) => {
      isResizing = true;
      startX = e.clientX;
      startWidth = rightPanel.offsetWidth;
      document.body.style.cursor = 'col-resize';
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      e.preventDefault();
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing) return;
      const width = startWidth - (e.clientX - startX);
      if (width > 250 && width < 500) {
        rightPanel.style.width = `${width}px`;
        setCopilotWidth(width);
      }
    };
    
    const handleMouseUp = () => {
      isResizing = false;
      document.body.style.cursor = '';
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
    
    resizeHandle.addEventListener('mousedown', handleMouseDown);
    
    return () => {
      resizeHandle.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);
  
  return (
    <div className="flex h-screen overflow-hidden bg-gradient-to-br from-blue-50 to-white">
      <LeftPanel />
      <MiddlePanel />
      
      {/* Resize Handle */}
      <div 
        ref={resizeHandleRef}
        className="w-1 bg-blue-200 cursor-col-resize hover:bg-primary transition-colors"
        style={{ display: isCopilotVisible ? 'block' : 'none' }}
      />
      
      {/* Right Panel (Copilot) */}
      <RightPanel 
        ref={rightPanelRef}
        style={{ 
          width: isCopilotVisible ? `${copilotWidth}px` : '0',
          display: isCopilotVisible ? 'flex' : 'none'
        }} 
      />
      
      {/* Copilot Toggle Button */}
      <div className="absolute bottom-5 right-5">
        <button 
          onClick={toggleCopilot}
          className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-md hover:bg-primary/90 transition-colors"
          aria-label={isCopilotVisible ? "Hide Copilot" : "Show Copilot"}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AppLayout;
