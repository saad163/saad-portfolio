export interface Project {
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  liveLink?: string;
  githubLink?: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
  logoUrl?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum ImageSize {
  Size_1K = '1K',
  Size_2K = '2K',
  Size_4K = '4K'
}
