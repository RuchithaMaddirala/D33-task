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
      className={`p-4 rounded-lg cursor-pointer transition-all ${
        isSelected 
          ? 'bg-primary border border-primary shadow-sm' 
          : 'bg-white hover:bg-blue-50 hover:border-blue-200 border border-gray-300'
      }`}
      onClick={onClick}
    >
      <h3 className={`font-medium ${isSelected ? 'text-white' : 'text-gray-900'}`}>
        {project.name}
      </h3>
      <p className={`text-sm mt-1 ${isSelected ? 'text-blue-200' : 'text-gray-500'}`}>
        Last updated: {project.lastUpdated}
      </p>
    </div>
  );
};

export default ProjectCard;
