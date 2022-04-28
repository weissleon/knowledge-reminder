export type ProblemData = {
  id: string;
  contents: ProblemContentData[];
  questions: QuestionData[];
};

export type ProblemContentData = {
  index: number;
  content: string;
  questionId: string;
};

export type QuestionData = {
  id: string;
  content: string;
  choices: ChoiceData[];
};

// export type ChoiceData = {
//   // id: string;
//   content: string;
//   // isTrue: boolean;
// };

export type ChoiceData = string

export type DecisionData = {
  questionId: string;
  decision: string[];
};
