import { Question } from "../types";
import { groupAQuestions } from "./categories/groupA";
import { groupBQuestions } from "./categories/groupB";
import { groupCQuestions } from "./categories/groupC";
import { groupDQuestions } from "./categories/groupD";

// Merge all modular questions into a single centralized database
export const QUESTIONS: Question[] = [
  ...groupAQuestions,
  ...groupBQuestions,
  ...groupCQuestions,
  ...groupDQuestions,
];

const STORAGE_KEY = "kresz_plinko_custom_questions_v1";

/**
 * Loads the current active list of questions from localStorage (with fallback to default QUESTIONS)
 */
export function getQuestionsFromStorage(): Question[] {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error("Failed to load questions from localStorage:", e);
  }
  return QUESTIONS;
}

/**
 * Saves the modified list of questions to localStorage
 */
export function saveQuestionsToStorage(questions: Question[]): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(questions));
  } catch (e) {
    console.error("Failed to save questions to localStorage:", e);
  }
}

/**
 * Resets the question database back to the factory default QUESTIONS
 */
export function resetQuestionsToDefault(): Question[] {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error("Failed to reset questions in localStorage:", e);
  }
  return QUESTIONS;
}

/**
 * Fisher-Yates shuffle algorithm to randomly order questions.
 */
export function shuffleQuestions<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Filters, shuffles, and retrieves the configured number of questions for a specific category.
 * Ensures no duplicates and shuffles the selection.
 */
export function getQuestionsForCategory(
  categoryId: string,
  count: number
): Question[] {
  // 1. Filter questions belonging to the selected category (using the dynamic store)
  const allQuestions = getQuestionsFromStorage();
  const filtered = allQuestions.filter((q) => q.category === categoryId);
  
  // 2. Shuffle using Fisher-Yates algorithm
  const shuffled = shuffleQuestions(filtered);
  
  // 3. Select the configured count (3, 5, or 10)
  return shuffled.slice(0, Math.min(count, shuffled.length));
}
