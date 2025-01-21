import { FC } from "react";

interface Props {
  inputName: string;
  itemTitle: string;
  placeholder: string;
}

// TODO: add prop "required" and conditionally render input element with "required"
const AddFormInput: FC<Props> = ({ inputName, itemTitle, placeholder }) => {
  return (
    <div className="flex flex-col mb-3">
      <label className="text-md" htmlFor={inputName}>
        {itemTitle}
      </label>
      <input
        type="text"
        name={inputName}
        id=""
        placeholder={placeholder}
        className="bg-slate-200 px-2 py-1 rounded-md outline-pink-500"
      />
    </div>
  );
};

export default AddFormInput;
