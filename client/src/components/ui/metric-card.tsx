import React from "react";
import { MetricData } from "@/types";

interface MetricCardProps {
  metric: MetricData;
}

const MetricCard: React.FC<MetricCardProps> = ({ metric }) => {
  return (
    <div 
      className="aspect-square rounded-lg p-5 flex flex-col justify-between hover:shadow-sm transition-all cursor-pointer border border-slate-200 bg-white"
    >
      <div className="font-medium text-slate-700">{metric.name}</div>
      <div className="text-3xl font-bold text-primary">
        {metric.value}
      </div>
    </div>
  );
};

export default MetricCard;
