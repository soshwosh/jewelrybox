import { FC } from "react";

interface Props {
  inputName: string;
  itemTitle: string;
  defaultValue: string;
}

// TODO: add prop "required" and conditionally render input element with "required"
const EditFormInput: FC<Props> = ({ inputName, itemTitle, defaultValue }) => {
  return (
    <div className="flex flex-col mb-3">
      <label className="text-md" htmlFor={inputName}>
        {itemTitle}
      </label>
      <input
        type="text"
        name={inputName}
        id=""
        defaultValue={defaultValue}
        className="bg-slate-200 px-2 py-1 rounded-md outline-pink-500"
      />
    </div>
  );
};

export default EditFormInput;
