import type { QuestionData } from "@src/types/Types";
import React, { FC } from "react";
import ChoiceBox from "./ChoiceBox";

type Props = {
  question: QuestionData;
};

const Question: FC<Props> = ({ question }) => {
  const { id, content, choices } = question;

  return (
    <div className="flex flex-col">
      <div>{content}</div>
      <ChoiceBox choices={choices} questionId={id} />
    </div>
  );
};

export default Question;
