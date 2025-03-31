import React from "react";
import { MetricData } from "@/types";

interface MetricCardProps {
  metric: MetricData;
}

const MetricCard: React.FC<MetricCardProps> = ({ metric }) => {
  // Get a subtle background based on metric ID for variety
  const getMetricBackground = (id: number) => {
    const backgrounds = [
      'bg-white border-indigo-100 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-white',
      'bg-white border-indigo-200 hover:bg-gradient-to-br hover:from-white hover:to-indigo-50',
      'bg-indigo-50 border-indigo-100 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-white',
      'bg-white border-indigo-100 hover:bg-gradient-to-br hover:from-white hover:to-indigo-50',
      'bg-indigo-50 border-indigo-200 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-white'
    ];
    return backgrounds[(id - 1) % backgrounds.length];
  };

  return (
    <div 
      className={`aspect-square rounded-lg p-5 flex flex-col justify-between hover:shadow-lg transition-all cursor-pointer border ${getMetricBackground(metric.id)}`}
    >
      <div className="font-medium text-gray-600">{metric.name}</div>
      <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-indigo-500">
        {metric.value}
      </div>
    </div>
  );
};

export default MetricCard;
