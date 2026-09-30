export type ProjectCategory =
  | "Machine Learning"
  | "Deep Learning"
  | "Computer Vision"
  | "NLP"
  | "LLM"
  | "RAG"
  | "AI Agents"
  | "Generative AI"
  | "AI Applications";

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  categories: ProjectCategory[];
  tags: string[];
  technologies: string[];
  github: string;
  images: string[];
  overview: string;
  problem: string;
  solution: string;
  architecture: string;
  features: string[];
  pipeline?: string[];
  results?: ProjectMetric[];
  challenges?: string[];
  lessons?: string[];
  futureImprovements: string[];
  disclaimer?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  status: "Completed" | "Coming Soon" | "In Progress";
  link: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  id: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "instagram" | "whatsapp";
}