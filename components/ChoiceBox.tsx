import React, { FC } from "react";
import Choice from "./Choice";

type Props = {
  questionId: string;
  choices: string[];
};

const ChoiceBox: FC<Props> = ({ choices, questionId }) => {
  return (
    <div className="flex flex-row gap-x-4">
      {choices.length > 0 &&
        choices.map((choice, index) => (
          <Choice key={`${questionId}-${index}`} label={choice} />
        ))}
    </div>
  );
};

export default ChoiceBox;
