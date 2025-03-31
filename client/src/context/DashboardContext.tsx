import React, { createContext, useContext, useState } from "react";
import { Project, MetricData, ChatMessage } from "@/types";

// Sample projects data
const projectsData: Project[] = [
  {
    id: 1,
    name: "Project Alpha",
    lastUpdated: "2 days ago",
    metrics: [
      { id: 1, name: "Revenue", value: "$24,500" },
      { id: 2, name: "Users", value: "1,234" },
      { id: 3, name: "Conversion", value: "5.2%" },
      { id: 4, name: "Traffic", value: "45.3K" },
      { id: 5, name: "Bounce Rate", value: "32%" },
      { id: 6, name: "Session Time", value: "2:34" },
      { id: 7, name: "Customers", value: "876" },
      { id: 8, name: "Products", value: "237" },
      { id: 9, name: "Orders", value: "543" }
    ]
  },
  {
    id: 2,
    name: "Marketing Campaign",
    lastUpdated: "5 days ago",
    metrics: [
      { id: 1, name: "Ad Spend", value: "$12,350" },
      { id: 2, name: "Impressions", value: "245K" },
      { id: 3, name: "Clicks", value: "8.7K" },
      { id: 4, name: "CTR", value: "3.5%" },
      { id: 5, name: "CPC", value: "$1.42" },
      { id: 6, name: "Conversions", value: "954" },
      { id: 7, name: "CPA", value: "$12.94" },
      { id: 8, name: "ROI", value: "245%" },
      { id: 9, name: "ROAS", value: "3.4x" }
    ]
  },
  {
    id: 3,
    name: "Q4 Analysis",
    lastUpdated: "1 week ago",
    metrics: [
      { id: 1, name: "Revenue", value: "$1.25M" },
      { id: 2, name: "Growth", value: "12.3%" },
      { id: 3, name: "COGS", value: "$450K" },
      { id: 4, name: "Gross Profit", value: "$800K" },
      { id: 5, name: "Expenses", value: "$320K" },
      { id: 6, name: "Net Profit", value: "$480K" },
      { id: 7, name: "Margin", value: "38.4%" },
      { id: 8, name: "Headcount", value: "53" },
      { id: 9, name: "Retention", value: "92%" }
    ]
  }
];

// Initial chat messages
const initialMessages: ChatMessage[] = [
  {
    id: 1,
    content: "How is the project performing?",
    sender: "user"
  },
  {
    id: 2,
    content: "Project Alpha shows positive trends with a 15% increase in revenue compared to last month. User growth is steady at 8% and conversion rates have improved by 2.3 percentage points.",
    sender: "assistant"
  },
  {
    id: 3,
    content: "What's the biggest area for improvement?",
    sender: "user"
  },
  {
    id: 4,
    content: "Based on the metrics, the bounce rate at 32% is higher than industry average. Consider improving landing page experience and site performance to reduce this metric.",
    sender: "assistant"
  }
];

interface DashboardContextType {
  projects: Project[];
  selectedProject: Project | null;
  setSelectedProject: (project: Project) => void;
  selectedProjectMetrics: MetricData[];
  isCopilotVisible: boolean;
  toggleCopilot: () => void;
  messages: ChatMessage[];
  addMessage: (message: string) => void;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export const DashboardProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedProject, setSelectedProject] = useState<Project>(projectsData[0]);
  const [isCopilotVisible, setIsCopilotVisible] = useState<boolean>(true);
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  
  const toggleCopilot = () => {
    setIsCopilotVisible(!isCopilotVisible);
  };
  
  const addMessage = (content: string) => {
    // Add user message
    const userMessage: ChatMessage = {
      id: messages.length + 1,
      content,
      sender: "user"
    };
    
    setMessages([...messages, userMessage]);
    
    // Simulate assistant response
    setTimeout(() => {
      const assistantMessage: ChatMessage = {
        id: messages.length + 2,
        content: getAssistantResponse(content, selectedProject),
        sender: "assistant"
      };
      
      setMessages(prev => [...prev, assistantMessage]);
    }, 1000);
  };
  
  return (
    <DashboardContext.Provider 
      value={{ 
        projects: projectsData,
        selectedProject,
        setSelectedProject,
        selectedProjectMetrics: selectedProject?.metrics || [],
        isCopilotVisible,
        toggleCopilot,
        messages,
        addMessage
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
};

// Helper function to generate basic assistant responses
function getAssistantResponse(query: string, project: Project): string {
  const lowercaseQuery = query.toLowerCase();
  
  if (lowercaseQuery.includes("revenue") || lowercaseQuery.includes("money") || lowercaseQuery.includes("earnings")) {
    return `${project.name} is showing strong revenue performance. The current value is ${project.metrics[0].value}, which is on track to meet quarterly goals.`;
  } 
  
  if (lowercaseQuery.includes("users") || lowercaseQuery.includes("customers") || lowercaseQuery.includes("people")) {
    return `The user metrics for ${project.name} are positive with ${project.metrics[1].value} active users currently, representing a healthy growth pattern.`;
  }
  
  if (lowercaseQuery.includes("improve") || lowercaseQuery.includes("better") || lowercaseQuery.includes("increase")) {
    return `For ${project.name}, I recommend focusing on improving the bounce rate (currently ${project.metrics[4].value}) which is higher than industry average. User session time (${project.metrics[5].value}) could also be extended through better engagement strategies.`;
  }
  
  return `I've analyzed the metrics for ${project.name}. The overall performance looks good with strong numbers across key indicators. Let me know if you need more specific insights on any particular metric.`;
}
