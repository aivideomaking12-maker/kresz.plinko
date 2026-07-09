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
  // 1. Filter questions belonging to the selected category
  const filtered = QUESTIONS.filter((q) => q.category === categoryId);
  
  // 2. Shuffle using Fisher-Yates algorithm
  const shuffled = shuffleQuestions(filtered);
  
  // 3. Select the configured count (3, 5, or 10)
  return shuffled.slice(0, Math.min(count, shuffled.length));
}
