import "./Heading.css";

export interface HeadingProps {
  name: string;
  size?: "small" | "medium" | "large";
  underlined?: boolean;
  weight?: "light" | "heavy";
}

export const Heading = ({
  name,
  size = "medium",
  underlined = false,
  weight = "light",
}: HeadingProps) => {
  const underlinedClass = underlined ? "heading-underlined" : "";
  return (
    <h2
      className={[
        "heading",
        `heading-${size}`,
        `heading-${weight}`,
        underlinedClass,
      ].join(" ")}
    >
      {name}
    </h2>
  );
};
