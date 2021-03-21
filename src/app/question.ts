export interface Question {
  id: number;
  question: string;
  correctAnswer: string;
  allAnswers: string[];
  usedBefore: boolean;
}
