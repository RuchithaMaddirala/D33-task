import React from "react";
import ProjectCard from "@/components/ui/project-card";
import { useDashboard } from "@/context/DashboardContext";
import logoPath from "../../assets/logo.jpg";

const LeftPanel: React.FC = () => {
  const { projects, selectedProject, setSelectedProject } = useDashboard();
  
  return (
    <aside className="w-[280px] border-r border-indigo-100 flex flex-col h-full bg-white">
      {/* Logo */}
      <div className="py-3 px-4 border-4 border-indigo-500 bg-white relative mb-2 mx-2 rounded-md shadow-sm"> 
          <div className="h-10 flex items-center justify-center">
          <img 
            src={logoPath} 
            alt="D33 Logo" 
            className="w-auto h-full" 
            style={{ filter: 'none' }}
          />
        </div>
      </div>
      
      {/* Projects Header */}
      <div className="px-4 pt-5 pb-2">
        <h2 className="font-semibold text-lg text-gray-900">Projects</h2>
        <p className="text-xs text-gray-500 mt-1">Select a project to view details</p>
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
      <div className="p-4 border-t border-indigo-100 bg-indigo-50 flex items-center">
        <div className="w-9 h-9 rounded-full bg-gradient-to-r from-primary to-indigo-600 flex items-center justify-center text-white font-medium text-sm shadow-lg">
          JD
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-900">John Doe</p>
          <p className="text-xs text-gray-500">Admin</p>
        </div>
      </div>
    </aside>
  );
};

export default LeftPanel;
