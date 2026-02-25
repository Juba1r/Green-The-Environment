export interface SEO {
  title: string;
  description: string;
  ogImage?: string;
  keywords?: string[];
}

export interface MainImage {
  src: string;
  alt: string;
  blurDataURL?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string; // HTML or Markdown
  image: MainImage;
  targetAmount: number;
  raisedAmount: number;
  location: string;
  status: 'ongoing' | 'completed' | 'planned';
  seo: SEO;
  metrics: {
    treesPlanted?: number;
    peopleHelped?: number;
    tonsPlastic?: number;
    hectaresRestored?: number;
  };
  startDate: string;
  endDate?: string;
}

export interface Campaign {
  id: string;
  slug: string;
  title: string;
  urgency: 'high' | 'medium' | 'low';
  excerpt: string;
  content: string;
  image: MainImage;
  goal: number;
  raised: number;
  seo: SEO;
  deadline: string;
}

export interface VolunteerRole {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'remote' | 'on-site' | 'hybrid';
  description: string;
  requirements: string[];
}
