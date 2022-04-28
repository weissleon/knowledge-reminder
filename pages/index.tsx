import type { NextPage } from "next";
import dummyProblems from "@data/dummy_data.json";
import { useImmer } from "use-immer";
import { ProblemData, DecisionData } from "@src/types/Types";
import Problem from "@components/Problem";

const Home: NextPage = () => {
  const problems = getProblems();

  const [currentIndex, updateCurrentIndex] = useImmer(0);
  const [answerSheet, updateAnswerSheet] = useImmer<DecisionData[]>([]);

  function nextIndex() {
    if (currentIndex >= problems.length - 1) return;
    updateCurrentIndex((draft) => {
      draft++;
    });
  }

  function prevIndex() {
    if (currentIndex <= problems.length - 1) return;
    updateCurrentIndex((draft) => {
      draft--;
    });
  }

  function handleOnDecisionChange(questionId: string, choiceIndices: string[]) {
    updateAnswerSheet((draft) => {
      const existingEntry = draft.filter(
        (answer) => answer.questionId === questionId
      );
      if (existingEntry.length > 0) existingEntry[0].decision = choiceIndices;
      else draft.push({ questionId: questionId, decision: [...choiceIndices] });
    });
  }

  function handleOnSubmit() {
    console.log(answerSheet);
  }

  return (
    <div>
      <Problem
        index={"1"}
        key={problems[0].id}
        problem={problems[0]}
        onDecisionChange={handleOnDecisionChange}
      />
      <button
        onClick={handleOnSubmit}
        className="rounded-md bg-lime-400 px-4 py-2"
      >
        Submit
      </button>
    </div>
  );
};

export default Home;

function getProblems(): ProblemData[] {
  return dummyProblems;
}
