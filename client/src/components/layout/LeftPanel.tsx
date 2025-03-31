import React from "react";
import ProjectCard from "@/components/ui/project-card";
import { useDashboard } from "@/context/DashboardContext";

const LeftPanel: React.FC = () => {
  const { projects, selectedProject, setSelectedProject } = useDashboard();
  
  return (
    <aside className="w-[280px] border-r border-slate-200 flex flex-col h-full bg-white">
      {/* Logo */}
      <div className="p-4 border-b border-slate-200">
        <div className="h-12 bg-gradient-to-r from-primary to-primary/80 rounded-lg flex items-center justify-start px-4 shadow-sm">
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <span className="ml-2 font-bold text-white text-lg">Dashboard</span>
        </div>
      </div>
      
      {/* Projects Header */}
      <div className="px-4 pt-5 pb-2">
        <h2 className="font-semibold text-lg text-slate-800">Projects</h2>
        <p className="text-xs text-slate-500 mt-1">Select a project to view details</p>
      </div>
      
      {/* Projects List */}
      <nav className="flex-1 overflow-y-auto px-4 py-2 space-y-3">
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            isSelected={selectedProject?.id === project.id}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </nav>
      
      {/* User Profile */}
      <div className="p-4 border-t border-slate-200 flex items-center">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-white font-bold">
          JD
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-slate-800">John Doe</p>
          <p className="text-xs text-slate-500">Admin</p>
        </div>
      </div>
    </aside>
  );
};

export default LeftPanel;
