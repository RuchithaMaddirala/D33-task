import React from "react";
import { useDashboard } from "@/context/DashboardContext";
import MetricCard from "@/components/ui/metric-card";

const MiddlePanel: React.FC = () => {
  const { selectedProject, selectedProjectMetrics } = useDashboard();
  
  if (!selectedProject) return null;
  
  return (
    <main className="flex-1 flex flex-col h-full overflow-auto bg-white">
      {/* Header */}
      <header className="border-b border-slate-200 p-6 bg-white">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              {selectedProject.name}
            </h1>
            <p className="text-sm text-slate-500 mt-1">Dashboard overview and analytics</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
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
      <footer className="border-t border-slate-200 p-4 bg-white flex justify-end">
        <button className="px-6 py-2 border border-slate-200 rounded-md hover:bg-slate-50 transition-colors text-sm font-medium flex items-center gap-2">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Export
        </button>
      </footer>
    </main>
  );
};

export default MiddlePanel;
