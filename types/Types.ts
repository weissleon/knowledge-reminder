export type ProblemData = {
  id: string;
  contents: ProblemContentData[];
  questions: QuestionData[];
};

export type ProblemDBData = {
  id: string;
  contentIds: string[];
  questionIds: string[];
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

export type ChoiceData = string;

export type DecisionData = {
  questionId: string;
  decision: string[];
};

export type TestData = {
  id: string;
  problems: {
    index: number;
    problemId: string;
    questions: {
      questionId: string;
      choices: { index: number; choiceId: string }[];
    }[];
  }[];
};

export type TestDBData = {
  id: string;
};

export type TestResultData = {
  testId: string;
  decisions: {
    questionId: string;
    choiceIds: string[];
  }[];
};
