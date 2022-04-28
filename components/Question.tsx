import { useDidUpdate } from "@hooks/useDidUpdate";
import type { QuestionData } from "@src/types/Types";
import React, { FC, useEffect } from "react";
import ChoiceBox from "./ChoiceBox";

type Props = {
  question: QuestionData;
  onChoicesChange?: (questionId: string, choiceIndices: string[]) => void;
};

const Question: FC<Props> = ({ question, onChoicesChange = () => {} }) => {
  const { id, content, choices } = question;

  function handleOnChoicesChange(choiceIndices: string[]) {
    onChoicesChange(id, choiceIndices);
  }

  return (
    <div className="flex flex-col">
      <div>{content}</div>
      <ChoiceBox
        choiceOptions={choices}
        questionId={id}
        onChoicesChange={handleOnChoicesChange}
      />
    </div>
  );
};

export default Question;
