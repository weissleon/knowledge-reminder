import { useDidUpdate } from "@hooks/useDidUpdate";
import React, { FC, useEffect } from "react";
import { useImmer } from "use-immer";
import Choice from "./Choice";

type Props = {
  questionId: string;
  choiceOptions: string[];
  onChoicesChange?: (choiceIndices: string[]) => void;
  multiple?: boolean;
};

const ChoiceBox: FC<Props> = ({
  choiceOptions,
  questionId,
  onChoicesChange = () => {},
  multiple = false,
}) => {
  const [choices, updateChoices] = useImmer<string[]>([]);

  function handleOnChoiceChange(choiceIndex: string, selected: boolean) {
    updateChoices((draft) => {
      if (!selected) {
        draft.splice(draft.indexOf(choiceIndex), 1);
      } else {
        if (multiple) draft.push(choiceIndex);
        else return [choiceIndex];
      }
    });
  }

  useDidUpdate(() => {
    onChoicesChange(choices);
  }, [choices]);

  return (
    <div className="flex flex-row gap-x-4">
      {choiceOptions.length > 0 &&
        choiceOptions.map((choice, index) => (
          <Choice
            selected={choices.indexOf(index.toString()) >= 0}
            index={index.toString()}
            key={`${questionId}-${index}`}
            label={choice}
            onChoiceChange={handleOnChoiceChange}
          />
        ))}
    </div>
  );
};

export default ChoiceBox;
