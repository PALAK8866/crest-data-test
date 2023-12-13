import { Dispatch, SetStateAction } from 'react';

function Button({
  text,
  active,
  setCategory,
}: {
  text: string;
  active: boolean;
  setCategory: Dispatch<SetStateAction<string>>;
}) {
  const baseClasses = 'min-w-32 px-4 py-2 border rounded-3xl border-lime-500 ';
  const defaultVariant = baseClasses + 'text-black bg-white';
  const activeClass = baseClasses + 'text-white bg-lime-500 ';
  return (
    <button
      className={active ? activeClass : defaultVariant}
      onClick={() => setCategory(text)}
    >
      {text}
    </button>
  );
}

export default Button;
