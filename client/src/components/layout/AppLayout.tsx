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
    <div className="flex h-screen overflow-hidden bg-gray-950">
      <LeftPanel />
      <MiddlePanel />
      
      {/* Resize Handle */}
      <div 
        ref={resizeHandleRef}
        className="w-1 bg-indigo-600 cursor-col-resize hover:bg-indigo-500 transition-colors"
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
      
      {/* Removing the absolute-positioned Copilot toggle button */}
    </div>
  );
};

export default AppLayout;
