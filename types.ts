import { LucideIcon } from 'lucide-react';

export interface TimelineEvent {
  date: string;
  icon: LucideIcon;
  category: 'education' | 'work' | 'other';
  label?: string; // Optional label for accessibility/tooltip
}

export interface Project {
  title: string;
  period?: string;
  description: string;
  tags: string[];
  icon?: LucideIcon;
}

export interface Profile {
  name: string;
  romaji: string;
  birthDate: string;
  origin: string;
  education: {
    highSchool: string;
    university: string;
  };
  circle: string;
  work: string[];
  hobbies: string[];
}