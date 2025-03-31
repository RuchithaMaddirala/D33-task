import React from "react";
import ProjectCard from "@/components/ui/project-card";
import { useDashboard } from "@/context/DashboardContext";

const LeftPanel: React.FC = () => {
  const { projects, selectedProject, setSelectedProject } = useDashboard();
  
  return (
    <aside className="w-[280px] border-r border-slate-200 flex flex-col h-full bg-white">
      {/* Logo */}
      <div className="p-4 border-b border-slate-200">
        <div className="w-32 h-10 bg-slate-100 rounded flex items-center justify-center">
          <svg className="w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
          </svg>
          <span className="ml-2 font-medium text-slate-700">Dashboard</span>
        </div>
      </div>
      
      {/* Projects List */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-3">
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            isSelected={selectedProject?.id === project.id}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </nav>
    </aside>
  );
};

export default LeftPanel;
