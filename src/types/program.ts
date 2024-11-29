export interface Program {
  id: string;
  title: string;
  type: 'competition' | 'program' | 'scholarship';
  subject: string;
  deadline: string;
  location: string;
  description: string;
  requirements: string[];
  image: string;
  interests: string[];
  competitiveness: 'Low' | 'Medium' | 'High';
  acceptanceRate?: string;
  applicationUrl?: string;
  websiteUrl?: string;
  stipend?: string;
  duration?: string;
}

export type Interest = {
  id: string;
  label: string;
  icon: string;
};