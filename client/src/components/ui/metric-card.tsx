import React from "react";
import { MetricData } from "@/types";

interface MetricCardProps {
  metric: MetricData;
}

const MetricCard: React.FC<MetricCardProps> = ({ metric }) => {
  // Get a color based on metric ID for variety
  const getMetricColor = (id: number) => {
    const colors = [
      'bg-gradient-to-br from-pink-100 to-rose-200 border-rose-300',
      'bg-gradient-to-br from-blue-100 to-indigo-200 border-indigo-300',
      'bg-gradient-to-br from-amber-100 to-orange-200 border-orange-300',
      'bg-gradient-to-br from-emerald-100 to-green-200 border-green-300',
      'bg-gradient-to-br from-purple-100 to-violet-200 border-violet-300',
      'bg-gradient-to-br from-sky-100 to-cyan-200 border-cyan-300',
      'bg-gradient-to-br from-fuchsia-100 to-pink-200 border-pink-300',
      'bg-gradient-to-br from-lime-100 to-green-200 border-green-300',
      'bg-gradient-to-br from-red-100 to-rose-200 border-rose-300'
    ];
    return colors[(id - 1) % colors.length];
  };

  return (
    <div 
      className={`aspect-square rounded-xl p-5 flex flex-col justify-between hover:shadow-md transition-all cursor-pointer border ${getMetricColor(metric.id)}`}
    >
      <div className="font-medium text-slate-700">{metric.name}</div>
      <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
        {metric.value}
      </div>
    </div>
  );
};

export default MetricCard;
