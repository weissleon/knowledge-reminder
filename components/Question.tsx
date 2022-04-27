import type { QuestionData } from "@src/types/Types";
import React, { FC } from "react";
import Choice from "@components/Selection";

type Props = {
  question: QuestionData;
};

const Question: FC<Props> = ({ question }) => {
  const { id, content, selections } = question;

  return (
    <div className="flex flex-col">
      <div>{content}</div>
      <div className="flex gap-x-4">
        {selections.length > 0 &&
          selections.map((selection) => (
            <Choice key={`${id}-${selection.id}`} label={selection.content} />
          ))}
      </div>
    </div>
  );
};

export default Question;
