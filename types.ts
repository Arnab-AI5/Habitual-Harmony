export enum HabitFrequency {
  Daily = 'Daily',
  Weekly = 'Weekly',
  Monthly = 'Monthly',
}

export enum HabitStatus {
  Active = 'Active',
  Paused = 'Paused',
  Archived = 'Archived',
}

export enum Mood {
  Joyful = 'Joyful', // 😄
  Happy = 'Happy',   // 🙂
  Neutral = 'Neutral', // 😐
  Sad = 'Sad',     // 😞
  Awful = 'Awful',   // 😣
}

export interface Habit {
  id: string;
  name: string;
  description?: string;
  frequency: HabitFrequency;
  status: HabitStatus;
  createdAt: string; // ISO date string
  category: string; // e.g., Mindfulness, Productivity
  timeEstimate: string; // e.g., "< 1 min", "1-5 min"
  color?: string; // Optional: for visual distinction
  icon?: string; // Optional: for icon representation
  completionDates: string[]; // YYYY-MM-DD format. This replaces streak, completions, and lastCompletedAt.
}

export interface JournalEntry {
  id: string;
  date: string; // ISO date string
  text: string;
  mood?: Mood;
}

export interface Settings {
  theme: 'light' | 'dark';
}

export interface ProgressData {
  day: string; // Mon, Tue, etc.
  completed: number;
}

export interface AISuggestion {
  id:string;
  name: string;
  description: string;
  category: string;
  timeEstimate: string;
  reasoning?: string;
  icon?: string; // e.g. 'LeafIcon'
  image?: string; // URL for image
}

export interface MoodOption {
  mood: Mood;
  emoji: string;
  label: string;
}