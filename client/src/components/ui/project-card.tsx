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
          ? 'bg-gradient-to-r from-primary to-indigo-600 border border-indigo-500 shadow-lg' 
          : 'bg-white hover:bg-indigo-50 border border-indigo-100 hover:border-indigo-200'
      }`}
      onClick={onClick}
    >
      <h3 className={`font-medium ${isSelected ? 'text-white' : 'text-gray-800'}`}>
        {project.name}
      </h3>
      <p className={`text-sm mt-1 ${isSelected ? 'text-indigo-200' : 'text-gray-500'}`}>
        Last updated: {project.lastUpdated}
      </p>
    </div>
  );
};

export default ProjectCard;
