import { Mood, MoodOption, AISuggestion, HabitFrequency } from './types.js'

export const APP_NAME = "Habitual Harmony";
export const APP_TAGLINE = "Your Habit Companion";

export const DEFAULT_THEME: 'light' | 'dark' = 'light';

export const MOOD_OPTIONS: MoodOption[] = [
  { mood: Mood.Joyful, emoji: '😄', label: 'Joyful' },
  { mood: Mood.Happy, emoji: '🙂', label: 'Happy' },
  { mood: Mood.Neutral, emoji: '😐', label: 'Neutral' },
  { mood: Mood.Sad, emoji: '😞', label: 'Sad' },
  { mood: Mood.Awful, emoji: '😣', label: 'Awful' },
];

export const HABIT_CATEGORIES: string[] = ['Focus', 'Mindfulness', 'Wellness', 'Fun', 'Productivity', 'Fitness', 'Learning'];
export const TIME_ESTIMATES: string[] = ['< 1 min', '1-5 min', '5-10 min', '10-15 min', '15-30 min', '> 30 min'];

export const PAGE_ROUTES = {
  DASHBOARD: '/',
  MY_HABITS: '/my-habits',
  DISCOVER: '/discover',
  JOURNAL: '/journal',
  AI_TOOL: '/ai-tool',
  SETTINGS: '/settings',
};

export const INITIAL_SUGGESTED_HABITS: AISuggestion[] = [
  {
    id: 'sug1',
    name: 'Mindful Breathing',
    description: 'Enhance focus and reduce stress with a simple breathing exercise for 1 minute.',
    category: 'Mindfulness',
    timeEstimate: '1-5 min',
    icon: 'SparklesIcon',
    image: 'https://picsum.photos/seed/mindful/300/200',
    reasoning: 'Calms the nervous system and improves concentration.',
  },
  {
    id: 'sug2',
    name: 'Gratitude Journaling',
    description: 'List 3 things you\'re thankful for. Takes about 2 minutes.',
    category: 'Wellness',
    timeEstimate: '1-5 min',
    icon: 'BookOpenIcon',
    image: 'https://picsum.photos/seed/gratitude/300/200',
    reasoning: 'Boosts positivity and overall well-being.',
  },
  {
    id: 'sug3',
    name: 'Quick Stretch',
    description: 'Improve flexibility and relieve tension with a short 3-minute stretching routine.',
    category: 'Fitness',
    timeEstimate: '1-5 min',
    icon: 'UserGroupIcon', // Placeholder, ideally a stretching icon
    image: 'https://picsum.photos/seed/stretch/300/200',
    reasoning: 'Increases blood flow and reduces muscle stiffness.',
  },
  {
    id: 'sug4',
    name: 'Nature Walk',
    description: 'Recharge and connect with nature through a brief 15-minute outdoor walk.',
    category: 'Wellness',
    timeEstimate: '15-30 min',
    icon: 'SunIcon',
    image: 'https://picsum.photos/seed/naturewalk/300/200',
    reasoning: 'Reduces stress and improves mood.',
  },
  {
    id: 'sug5',
    name: 'Hydration Reminder',
    description: 'Drink a glass of water. A simple yet effective habit.',
    category: 'Wellness',
    timeEstimate: '< 1 min',
    icon: 'SparklesIcon', // Placeholder, ideally a water drop icon
    image: 'https://picsum.photos/seed/hydration/300/200',
    reasoning: 'Essential for overall health and cognitive function.'
  },
];

export const MOTIVATIONAL_QUOTES: string[] = [
  "Consistency compounds. One small win today counts.",
  "The journey of a thousand miles begins with a single step.",
  "Believe you can and you're halfway there.",
  "Small habits, big results.",
  "Progress, not perfection.",
  "Every moment is a fresh beginning.",
  "You don't have to be great to start, but you have to start to be great.",
  "The secret of getting ahead is getting started.",
  "Little by little, a little becomes a lot.",
  "Success is the sum of small efforts, repeated day in and day out."
];

export const GEMINI_API_KEY_PLACEHOLDER = "YOUR_API_KEY_HERE"; // Placeholder, actual key should be in process.env.API_KEY

export const GEMINI_TEXT_MODEL = "gemini-2.5-flash-preview-04-17";
// export const GEMINI_IMAGE_MODEL = "imagen-3.0-generate-002"; // Not used in this app

export const DEFAULT_HABIT_COLOR = '#0EA5E9'; // Sky Blue 500
export const HABIT_COLORS: string[] = [
  '#0EA5E9', // Sky
  '#EC4899', // Pink
  '#10B981', // Emerald
  '#F59E0B', // Amber
  '#8B5CF6', // Violet
  '#EF4444', // Red
];