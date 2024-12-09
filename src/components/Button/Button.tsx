import "./Button.css";

export interface ButtonProps {
  primary?: boolean;
  size?: "small" | "medium" | "large";
  label: string;
}

export const Button = ({
  primary = false,
  size = "medium",
  label,
}: ButtonProps) => {
  const mode = primary
    ? "button-primary"
    : "button-secondary";
  return (
    <button
      type="button"
      className={["button", `button-${size}`, mode].join(
        " "
      )}
    >
      {label}
    </button>
  );
};
