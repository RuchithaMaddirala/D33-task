import React from "react";
import ProjectCard from "@/components/ui/project-card";
import { useDashboard } from "@/context/DashboardContext";

const LeftPanel: React.FC = () => {
  const { projects, selectedProject, setSelectedProject } = useDashboard();
  
  return (
    <aside className="w-[280px] border-r border-blue-200 flex flex-col h-full bg-white">
      {/* Logo */}
      <div className="p-4 border-b border-blue-200 bg-blue-50">
        <div className="h-10 bg-primary rounded-md flex items-center justify-start px-4">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <span className="ml-2 font-medium text-white">Dashboard</span>
        </div>
      </div>
      
      {/* Projects Header */}
      <div className="px-4 pt-5 pb-2">
        <h2 className="font-semibold text-lg text-primary">Projects</h2>
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
      <div className="p-4 border-t border-blue-200 bg-blue-50 flex items-center">
        <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white font-medium text-sm">
          JD
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-primary-foreground">John Doe</p>
          <p className="text-xs text-slate-500">Admin</p>
        </div>
      </div>
    </aside>
  );
};

export default LeftPanel;
