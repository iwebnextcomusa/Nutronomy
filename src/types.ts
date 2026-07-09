export interface ResearchArea {
  id: string;
  title: string;
  description: string;
  detailedInfo: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  category: "Science" | "Technology" | "Custom";
  iconName: string;
}

export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: "Research" | "Insights" | "Tips" | "Discovery";
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
  };
  tags: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  detailedOfferings: string[];
  engagementModel: string;
  iconName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "Science" | "Nutrition" | "General";
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  specialties: string[];
  avatarSeed: string;
}

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}
