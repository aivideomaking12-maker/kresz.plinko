export type Difficulty = "easy" | "medium" | "hard";

export interface Question {
  id: string;
  category: string;
  difficulty: Difficulty;
  question: string;
  answers: string[];
  correctAnswer: number; // 0-based index
  explanation: string;
  image?: string;
}

export interface GameSettings {
  questionCount: number; // 3, 5, or 10
  enableAnimations: boolean;
  enableConfetti: boolean;
  enableFireworks: boolean;
  enableMascot: boolean;
  enableMusic: boolean;
  enableSFX: boolean;
  timerDuration: number; // 0 (OFF), 20, 30, 45, 60 seconds
}

export interface CategoryInfo {
  id: string;
  name: string;
  color: string; // Tailwind class, e.g. bg-amber-500, text-amber-500, border-amber-500
  gradient: string; // Tailwind gradient class, e.g. from-amber-400 to-amber-600
  iconName: string; // Lucide icon identifier
}

export interface GameState {
  currentScreen: "home" | "spinning" | "category-intro" | "question" | "results" | "review";
  selectedCategory: CategoryInfo | null;
  questions: Question[];
  currentQuestionIndex: number;
  userAnswers: { [questionId: string]: number }; // questionId -> answer index
  score: number;
  timerLeft: number;
  showExplanation: boolean;
  selectedAnswerIndex: number | null;
}
