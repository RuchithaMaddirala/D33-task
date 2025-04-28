import React from "react";
import { useDashboard } from "@/context/DashboardContext";
import MetricCard from "@/components/ui/metric-card";

const MiddlePanel: React.FC = () => {
  const { selectedProject, selectedProjectMetrics, isCopilotVisible, toggleCopilot } = useDashboard();
  
  if (!selectedProject) return null;
  
  return (
    <main className="flex-1 flex flex-col h-full overflow-auto bg-white relative">
      {/* Header */}
      <header className="border-b border-indigo-100 p-6 bg-gradient-to-r from-indigo-50 to-white">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-indigo-500">
              {selectedProject.name}
            </h1>
            <p className="text-sm text-gray-500 mt-1">Dashboard overview and analytics</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white border border-indigo-200 rounded-lg flex items-center justify-center text-indigo-600 shadow-sm hover:bg-indigo-50 transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </div>
          </div>
        </div>
      </header>
      
      {/* Content Grid */}
      <div className="flex-1 p-6 overflow-auto">
        <div className="grid grid-cols-3 gap-4">
          {selectedProjectMetrics.map(metric => (
            <MetricCard key={metric.id} metric={metric} />
          ))}
        </div>
      </div>
      
      {/* Footer */}
      <footer className="border-t border-indigo-100 p-4 bg-white flex justify-start">
        <button className="px-6 py-2 bg-gradient-to-r from-primary to-indigo-600 text-white rounded-md hover:from-indigo-600 hover:to-primary transition-all text-sm font-medium flex items-center gap-2 shadow-md">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Export
        </button>
      </footer>
      
      {/* Copilot Toggle Button */}
      <div className="absolute bottom-5 right-5 flex flex-col items-center">
        <div className="bg-white px-3 py-1 rounded-full mb-2 text-xs font-medium text-gray-700 shadow-md border border-indigo-200">
          JAI
        </div>
        <button 
          onClick={toggleCopilot}
          className="w-11 h-11 bg-gradient-to-r from-primary to-indigo-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-indigo-500/30 hover:from-indigo-600 hover:to-primary transition-all"
          aria-label={isCopilotVisible ? "Hide Copilot" : "Show Copilot"}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </button>
      </div>
    </main>
  );
};

export default MiddlePanel;
