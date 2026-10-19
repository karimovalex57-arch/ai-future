export interface AITool {
  id: string;
  name: string;
  tagline: string;
  category: 'text' | 'design' | 'coding' | 'presentation' | 'assistant';
  categoryLabel: string;
  iconName: string;
  brandColor: string;
  url: string;
  description: string;
  fullDescription: string;
  features: string[];
  pricingType: 'Bepul va pullik' | 'Bepul sinov' | 'Freemium' | 'Pullik (sinov muddati bilan)';
  recommendedFor: string;
}

export interface AICoreConcept {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  details: string[];
  gradient: string;
}

export interface AICapability {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlights: string[];
  metric: string;
  metricLabel: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  isError?: boolean;
}
