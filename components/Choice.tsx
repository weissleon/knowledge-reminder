import React, { ChangeEvent, FC } from "react";

type Props = {
  index: string;
  label?: string;
  selected?: boolean;
  onChoiceChange?: (choiceIndex: string, selected: boolean) => void;
};

const Choice: FC<Props> = ({
  selected = false,
  index = "",
  label = "",
  onChoiceChange = () => {},
}) => {
  function handleOnSelect(event: ChangeEvent<HTMLInputElement>) {
    const isChecked = event.target.checked;
    onChoiceChange(index, isChecked);
  }

  return (
    <div className="flex items-center gap-x-1">
      <input
        type="checkbox"
        checked={selected}
        id={label}
        onChange={handleOnSelect}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export default Choice;
