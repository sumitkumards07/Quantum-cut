export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  videoUrl?: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export enum Section {
  HERO = 'hero',
  WORK = 'work',
  SERVICES = 'services',
  PRICING = 'pricing',
  CONTACT = 'contact'
}