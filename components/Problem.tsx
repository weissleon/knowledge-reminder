import { ProblemData } from "@src/types/Types";
import React, { FC, useEffect } from "react";
import Question from "./Question";

type Props = {
  index?: string;
  problem: ProblemData;
  onDecisionChange?: (questionId: string, choiceIndices: string[]) => void;
};

const Problem: FC<Props> = ({
  index,
  problem,
  onDecisionChange = () => {},
}) => {
  const { id, contents, questions } = problem;

  function render(): JSX.Element[] {
    let renderedElements: JSX.Element[] = [];
    let currentIndex = 0;
    let currentQuestionIndex = 0;

    while (currentQuestionIndex < questions.length) {
      const content = contents[currentIndex] || null;
      const question = questions[currentQuestionIndex] || null;
      if (content === null || content.questionId !== question.id) {
        renderedElements.push(
          <Question
            key={question.id}
            question={question}
            onChoicesChange={onDecisionChange}
          />
        );
        currentQuestionIndex++;
      } else {
        renderedElements.push(
          <ProblemContent
            key={`${id}-${content.index}`}
            content={content.content}
          />
        );
        currentIndex++;
      }
    }

    return renderedElements;
  }

  return (
    <div>
      {render()}
      {/* {render().map((element, i) => {
        if (i === 0 && element.type === ProblemContent)
          return (
            <div key={i} className="flex flex-row gap-x-4">
              <span className="w-8">{index}.</span>
              <span>{element}</span>
            </div>
          );

        if (element.type === Question)
          return (
            <div key={i} className="flex flex-row gap-x-4">
              <span className="w-8">{`${index}-${i}`}</span>
              <span>{element}</span>
            </div>
          );
        return <span className="ml-8">{element}</span>;
      })} */}
    </div>
  );
};

type ContentProps = {
  content: string;
};
const ProblemContent: FC<ContentProps> = ({ content }) => {
  return <div>{content}</div>;
};

export default Problem;
