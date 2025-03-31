import React from "react";
import { MetricData } from "@/types";

interface MetricCardProps {
  metric: MetricData;
}

const MetricCard: React.FC<MetricCardProps> = ({ metric }) => {
  // Get a subtle background based on metric ID for variety
  const getMetricBackground = (id: number) => {
    const backgrounds = [
      'bg-blue-50 border-blue-200 hover:bg-blue-100',
      'bg-white border-blue-200 hover:bg-blue-50',
      'bg-blue-50 border-blue-200 hover:bg-blue-100',
      'bg-white border-blue-200 hover:bg-blue-50',
      'bg-blue-50 border-blue-200 hover:bg-blue-100'
    ];
    return backgrounds[(id - 1) % backgrounds.length];
  };

  return (
    <div 
      className={`aspect-square rounded-lg p-5 flex flex-col justify-between hover:shadow transition-all cursor-pointer border ${getMetricBackground(metric.id)}`}
    >
      <div className="font-medium text-black">{metric.name}</div>
      <div className="text-3xl font-bold text-black">
        {metric.value}
      </div>
    </div>
  );
};

export default MetricCard;
