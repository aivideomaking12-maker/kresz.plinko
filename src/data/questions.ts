import { Question, Difficulty } from "../types";
import { groupAQuestions } from "./categories/groupA";
import { groupBQuestions } from "./categories/groupB";
import { groupCQuestions } from "./categories/groupC";
import { groupDQuestions } from "./categories/groupD";

// Merge all modular questions into a single centralized database.
export const QUESTIONS: Question[] = [
  ...groupAQuestions,
  ...groupBQuestions,
  ...groupCQuestions,
  ...groupDQuestions,
];

// v2 intentionally replaces the old snapshot-only storage strategy.
// The old v1 storage could hide newly deployed questions because the browser
// kept using the previous complete question list from localStorage.
const STORAGE_KEY = "kresz_plinko_custom_questions_v2";
const LEGACY_STORAGE_KEY = "kresz_plinko_custom_questions_v1";

/**
 * Combines the factory question database with the locally edited database.
 *
 * Local edits win for an existing question ID, while questions that were
 * added to the deployed source code later are automatically added as well.
 * This is important on tablets where localStorage survives a new deployment.
 */
function mergeWithFactoryQuestions(saved: Question[]): Question[] {
  const savedById = new Map(saved.map((question) => [question.id, question]));

  // Keep the factory order, but use the locally edited version when one exists.
  const merged = QUESTIONS.map((factoryQuestion) => {
    return savedById.get(factoryQuestion.id) ?? factoryQuestion;
  });

  // Keep genuinely custom questions created in the Admin panel.
  const factoryIds = new Set(QUESTIONS.map((question) => question.id));
  const customQuestions = saved.filter((question) => !factoryIds.has(question.id));

  return [...merged, ...customQuestions];
}

/**
 * Loads the active question database.
 *
 * Migration behaviour:
 * - v2 is merged with the current factory database.
 * - Existing v1 data is migrated to v2 and also merged with newly deployed
 *   factory questions.
 * - If storage is empty/corrupt, the current factory database is used.
 */
export function getQuestionsFromStorage(): Question[] {
  try {
    const current = window.localStorage.getItem(STORAGE_KEY);
    if (current) {
      const parsed = JSON.parse(current);
      if (Array.isArray(parsed)) {
        const merged = mergeWithFactoryQuestions(parsed);
        // Persist the merge so the newly deployed questions are available on
        // the next load too.
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
        return merged;
      }
    }

    const legacy = window.localStorage.getItem(LEGACY_STORAGE_KEY);
    if (legacy) {
      const parsed = JSON.parse(legacy);
      if (Array.isArray(parsed)) {
        const merged = mergeWithFactoryQuestions(parsed);
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
        return merged;
      }
    }
  } catch (e) {
    console.error("Failed to load questions from localStorage:", e);
  }

  return QUESTIONS;
}

/**
 * Saves the modified list of questions to localStorage.
 */
export function saveQuestionsToStorage(questions: Question[]): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(questions));
  } catch (e) {
    console.error("Failed to save questions to localStorage:", e);
  }
}

/**
 * Resets the question database back to the current factory defaults.
 */
export function resetQuestionsToDefault(): Question[] {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
    window.localStorage.removeItem(LEGACY_STORAGE_KEY);
  } catch (e) {
    console.error("Failed to reset questions in localStorage:", e);
  }
  return QUESTIONS;
}

/** Fisher-Yates shuffle algorithm. */
export function shuffleQuestions<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Retrieves the configured number of questions.
 *
 * The selected Plinko category is the primary pool. If that category does not
 * contain enough questions for the requested count at the selected difficulty,
 * the remaining slots are filled from the other categories using ONLY the
 * allowed difficulties. This guarantees that the admin setting (3/5/10) is
 * respected without silently introducing a forbidden difficulty.
 */
export function getQuestionsForCategory(
  categoryId: string,
  count: number,
  allowedDifficulties: Difficulty[] = ["easy", "medium", "hard"]
): Question[] {
  if (count <= 0 || allowedDifficulties.length === 0) return [];

  const allQuestions = getQuestionsFromStorage();
  const isAllowed = (question: Question) =>
    allowedDifficulties.includes(question.difficulty);

  const categoryPool = allQuestions.filter(
    (question) => question.category === categoryId && isAllowed(question)
  );

  const primary = shuffleQuestions(categoryPool).slice(0, count);

  if (primary.length >= count) {
    return primary;
  }

  const selectedIds = new Set(primary.map((question) => question.id));
  const fallbackPool = allQuestions.filter(
    (question) =>
      question.category !== categoryId &&
      isAllowed(question) &&
      !selectedIds.has(question.id)
  );

  const fallback = shuffleQuestions(fallbackPool).slice(0, count - primary.length);
  return [...primary, ...fallback];
}
