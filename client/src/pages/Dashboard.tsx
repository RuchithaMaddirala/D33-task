import React from "react";
import AppLayout from "@/components/layout/AppLayout";
import { useDashboard } from "@/context/DashboardContext";

const Dashboard: React.FC = () => {
  const { selectedProject } = useDashboard();
  
  return <AppLayout />;
};

export default Dashboard;
