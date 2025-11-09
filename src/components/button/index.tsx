import type { FC } from "react";

interface Props {
  text: string;
  name?: string;
  designs?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  fn?: () => void;
}

const Button: FC<Props> = ({ text, name, designs, disabled, type, fn }) => {
  return (
    <button
      onClick={fn}
      type={type}
      name={name}
      className={`custom-btn ${designs}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
