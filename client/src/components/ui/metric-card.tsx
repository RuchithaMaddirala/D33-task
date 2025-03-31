import React from "react";
import { MetricData } from "@/types";

interface MetricCardProps {
  metric: MetricData;
}

const MetricCard: React.FC<MetricCardProps> = ({ metric }) => {
  return (
    <div className="aspect-square bg-slate-200 rounded-lg p-4 flex flex-col justify-between hover:shadow-md transition-shadow cursor-pointer">
      <div className="font-medium text-slate-700">{metric.name}</div>
      <div className="text-2xl font-semibold">{metric.value}</div>
    </div>
  );
};

export default MetricCard;
