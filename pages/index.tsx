import type { NextPage } from "next";
import Question from "@components/Question";
import dummyProblems from "@data/dummy_data.json";
import { useImmer } from "use-immer";
import { ProblemData } from "@src/types/Types";
import Problem from "@components/Problem";

const Home: NextPage = () => {
  const problems = getProblems();

  const [currentIndex, updateCurrentIndex] = useImmer(0);

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

  return (
    <div>
      <Problem key={problems[0].id} problem={problems[0]} />
      {/* <Question key={problems[0].id} question={questions[0]} /> */}
    </div>
  );
};

export default Home;

function getProblems(): ProblemData[] {
  return dummyProblems;
}
