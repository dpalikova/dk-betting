import "./LogoContainer.css";

export interface LogoProps {
  logoUrl: string;
  alt: string;
  fill: string;
}

export const LogoContainer = ({ logoUrl, alt, fill }: LogoProps) => {
  return (
    <div style={{ backgroundColor: fill }} className="logo-container">
      <img src={logoUrl} alt={alt} />
    </div>
  );
};
