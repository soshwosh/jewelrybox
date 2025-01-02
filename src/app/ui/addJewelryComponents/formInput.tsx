import { FC } from "react";

interface Props {
  inputName: string;
  itemTitle: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// TODO: add prop "required" and conditionally render input element with "required"
const FormInput: FC<Props> = ({
  inputName,
  itemTitle,
  placeholder,
  onChange,
}) => {
  return (
    <div className="flex flex-col mb-3">
      <label className="text-md" htmlFor={inputName}>
        {itemTitle}
      </label>
      <input
        onChange={onChange}
        type="text"
        name={inputName}
        id=""
        placeholder={placeholder}
        className="bg-slate-200 w-1/2 px-2 py-1 rounded-md outline-pink-500"
      />
    </div>
  );
};

export default FormInput;
