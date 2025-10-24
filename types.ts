
export interface Template {
  id: number;
  title: string;
  description: string;
  canvaLink: string;
  tags: string[];
  isFree: boolean;
  imagePlaceholderQuery: string;
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
}
