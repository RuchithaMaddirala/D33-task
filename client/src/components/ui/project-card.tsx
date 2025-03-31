import React from "react";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  isSelected: boolean;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isSelected, onClick }) => {
  return (
    <div 
      className={`p-4 rounded-lg cursor-pointer transition-colors ${
        isSelected 
          ? 'bg-blue-50 border-blue-100' 
          : 'bg-slate-100 hover:bg-blue-50 hover:border-blue-100'
      }`}
      onClick={onClick}
    >
      <h3 className="font-medium text-slate-900">{project.name}</h3>
      <p className="text-sm text-slate-500 mt-1">Last updated: {project.lastUpdated}</p>
    </div>
  );
};

export default ProjectCard;
