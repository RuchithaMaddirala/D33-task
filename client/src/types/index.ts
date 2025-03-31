export interface MetricData {
  id: number;
  name: string;
  value: string;
}

export interface Project {
  id: number;
  name: string;
  lastUpdated: string;
  metrics: MetricData[];
}

export interface ChatMessage {
  id: number;
  content: string;
  sender: 'user' | 'assistant';
}
