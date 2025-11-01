export interface Template {
  id: number;
  title: string;
  description: string;
  canvaLink: string;
  tags: string[];
  isFree: boolean;
  imagePlaceholderQuery: string;
  coverImage?: string;
}

export enum Plan {
  Free = 'Free',
  Premium = 'Premium',
}

export interface User {
  email: string;
  plan: Plan;
  scriptGenerations: number;
  audioGenerations: number;
  imageEdits: number;
  campaignGenerations: number;
}

export type SocialPlatform = 'instagram' | 'facebook' | 'tiktok' | 'youtube';

export interface ScheduledPost {
  id: string;
  date: Date;
  content: string;
  mediaUrl?: string; // URL to the uploaded image/video
  mediaType?: string; // 'image' or 'video'
  platforms: SocialPlatform[];
}
