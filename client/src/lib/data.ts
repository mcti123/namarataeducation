export interface Subject {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  progress: number;
  rating: number;
  backgroundColor: string;
  iconBackgroundColor: string;
}

export interface Trophy {
  id: string;
  name: string;
  description: string;
  icon: string;
  iconColor: string;
  status: 'locked' | 'unlocked' | 'in-progress';
}

export type DifficultyLevel = 'easy' | 'medium' | 'intermediate' | 'hard';

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  difficulty: DifficultyLevel;
  explanation?: string;
}

export interface Test {
  id: string;
  subjectId: string;
  title: string;
  chapter: string;
  icon: string;
  duration: number;
  questions: Question[];
  difficulty?: DifficultyLevel;
  generatedBy?: 'system' | 'ai';
}

export interface UserAnswer {
  questionId: string;
  selectedOption: number | null;
}

export interface TestResult {
  testId: string;
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  unattempted: number;
  score: number;
  userAnswers: UserAnswer[];
  completedAt: Date;
}

export const subjects: Subject[] = [
  {
    id: 'math',
    name: 'Mathematics',
    description: 'Algebra, Geometry, Arithmetic, and more fundamentals for 6th grade',
    icon: 'fa-square-root-alt',
    color: 'rgb(99, 102, 241)',
    progress: 65,
    rating: 3.5,
    backgroundColor: 'rgba(99, 102, 241, 0.2)',
    iconBackgroundColor: 'rgba(99, 102, 241, 0.2)'
  },
  {
    id: 'science',
    name: 'Science',
    description: 'Biology, Chemistry, Physics with experiments and observations',
    icon: 'fa-atom',
    color: 'rgb(16, 185, 129)',
    progress: 80,
    rating: 4.0,
    backgroundColor: 'rgba(16, 185, 129, 0.2)',
    iconBackgroundColor: 'rgba(16, 185, 129, 0.2)'
  },
  {
    id: 'english',
    name: 'English',
    description: 'Grammar, Vocabulary, Comprehension, and Creative Writing',
    icon: 'fa-book-open',
    color: 'rgb(236, 72, 153)',
    progress: 50,
    rating: 3.0,
    backgroundColor: 'rgba(236, 72, 153, 0.2)',
    iconBackgroundColor: 'rgba(236, 72, 153, 0.2)'
  },
  {
    id: 'hindi',
    name: 'Hindi',
    description: 'Grammar, Literature, Comprehension, and Writing Skills',
    icon: 'fa-om',
    color: 'rgb(234, 179, 8)',
    progress: 40,
    rating: 2.5,
    backgroundColor: 'rgba(234, 179, 8, 0.2)',
    iconBackgroundColor: 'rgba(234, 179, 8, 0.2)'
  },
  {
    id: 'social',
    name: 'Social Studies',
    description: 'History, Geography, Civics, and Contemporary Society',
    icon: 'fa-globe-americas',
    color: 'rgb(59, 130, 246)',
    progress: 60,
    rating: 3.5,
    backgroundColor: 'rgba(59, 130, 246, 0.2)',
    iconBackgroundColor: 'rgba(59, 130, 246, 0.2)'
  },
  {
    id: 'sanskrit',
    name: 'Sanskrit',
    description: 'Basic Grammar, Vocabulary, Translations, and Conversational Sanskrit',
    icon: 'fa-om',
    color: 'rgb(249, 115, 22)',
    progress: 30,
    rating: 2.0,
    backgroundColor: 'rgba(249, 115, 22, 0.2)',
    iconBackgroundColor: 'rgba(249, 115, 22, 0.2)'
  }
];

export const trophies: Trophy[] = [
  {
    id: 'math-master',
    name: 'Math Master',
    description: 'Complete all math tests with 80%+ score',
    icon: 'fa-trophy',
    iconColor: 'text-yellow-400',
    status: 'locked'
  },
  {
    id: 'science-whiz',
    name: 'Science Whiz',
    description: 'Score 90%+ in all science chapter tests',
    icon: 'fa-flask',
    iconColor: 'text-green-400',
    status: 'unlocked'
  },
  {
    id: 'language-pro',
    name: 'Language Pro',
    description: 'Complete all English and Hindi tests',
    icon: 'fa-book',
    iconColor: 'text-blue-400',
    status: 'in-progress'
  },
  {
    id: 'history-buff',
    name: 'History Buff',
    description: 'Score 85%+ in Social Studies tests',
    icon: 'fa-globe-asia',
    iconColor: 'text-purple-400',
    status: 'locked'
  }
];