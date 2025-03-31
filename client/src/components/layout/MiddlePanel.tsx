import React from "react";
import { useDashboard } from "@/context/DashboardContext";
import MetricCard from "@/components/ui/metric-card";

const MiddlePanel: React.FC = () => {
  const { selectedProject, selectedProjectMetrics } = useDashboard();
  
  if (!selectedProject) return null;
  
  return (
    <main className="flex-1 flex flex-col h-full overflow-auto bg-white">
      {/* Header */}
      <header className="border-b border-slate-200 p-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-semibold text-slate-900">{selectedProject.name}</h1>
            <p className="text-sm text-slate-500">Dashboard overview and analytics</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded"></div>
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
      <footer className="border-t border-slate-200 p-4 flex justify-between">
        <button className="px-6 py-2 border border-slate-300 rounded-md hover:bg-slate-50 transition-colors text-sm font-medium">
          Export
        </button>
        <button className="px-6 py-2 bg-black text-white rounded-md hover:bg-slate-800 transition-colors text-sm font-medium">
          Generate Report
        </button>
      </footer>
    </main>
  );
};

export default MiddlePanel;
