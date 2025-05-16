export interface TopicData {
  label: string;
  value: number;
  color?: string;
}

export interface SentimentData {
  label: string;
  value: number;
  color?: string;
}

export interface TrendData {
  label: string;
  value: number;
}

export interface Entity {
  name: string;
  type: string;
  confidence: number;
}

export interface DemoResult {
  id: string;
  title: string;
  topics: TopicData[];
  sentiment: SentimentData[];
  trends: TrendData[];
  entities: Entity[];
  recommendations: string[];
}