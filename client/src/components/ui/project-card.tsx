import React from "react";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  isSelected: boolean;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isSelected, onClick }) => {
  // Get a unique color based on project ID
  const getProjectColor = (id: number) => {
    const colors = [
      'from-pink-500 to-rose-500',
      'from-blue-500 to-indigo-500',
      'from-amber-400 to-orange-500',
      'from-emerald-500 to-green-500',
      'from-purple-500 to-violet-500'
    ];
    return colors[(id - 1) % colors.length];
  };

  return (
    <div 
      className={`p-4 rounded-lg cursor-pointer transition-all shadow-sm hover:shadow-md ${
        isSelected 
          ? `bg-gradient-to-r ${getProjectColor(project.id)} text-white` 
          : 'bg-white hover:bg-slate-50 border border-slate-200'
      }`}
      onClick={onClick}
    >
      <h3 className={`font-medium ${isSelected ? 'text-white' : 'text-slate-900'}`}>
        {project.name}
      </h3>
      <p className={`text-sm mt-1 ${isSelected ? 'text-white/80' : 'text-slate-500'}`}>
        Last updated: {project.lastUpdated}
      </p>
    </div>
  );
};

export default ProjectCard;
