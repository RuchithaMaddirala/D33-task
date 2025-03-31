import React from "react";
import { MetricData } from "@/types";

interface MetricCardProps {
  metric: MetricData;
}

const MetricCard: React.FC<MetricCardProps> = ({ metric }) => {
  // Get a subtle background based on metric ID for variety
  const getMetricBackground = (id: number) => {
    const backgrounds = [
      'bg-gray-800 border-gray-700 hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-700',
      'bg-gray-900 border-gray-800 hover:bg-gradient-to-br hover:from-gray-900 hover:to-gray-800',
      'bg-gray-800 border-gray-700 hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-700',
      'bg-gray-900 border-gray-800 hover:bg-gradient-to-br hover:from-gray-900 hover:to-gray-800',
      'bg-gray-800 border-gray-700 hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-700'
    ];
    return backgrounds[(id - 1) % backgrounds.length];
  };

  return (
    <div 
      className={`aspect-square rounded-lg p-5 flex flex-col justify-between hover:shadow-lg transition-all cursor-pointer border ${getMetricBackground(metric.id)}`}
    >
      <div className="font-medium text-gray-300">{metric.name}</div>
      <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-indigo-100">
        {metric.value}
      </div>
    </div>
  );
};

export default MetricCard;
