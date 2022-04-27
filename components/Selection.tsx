import React, { ChangeEvent, FC } from "react";

type Props = {
  label?: string;
};

const Choice: FC<Props> = ({ label = "" }) => {
  function handleOnSelect(event: ChangeEvent<HTMLInputElement>) {
    const isChecked = event.target.checked;
    console.log(`${label}  ${isChecked ? "" : "un"}selected!`);
  }

  return (
    <div className="flex items-center gap-x-1">
      <input type="checkbox" id={label} onChange={handleOnSelect} />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export default Choice;
