import "./CasinoBody.css";
import { Heading } from "./Heading/Heading";
import { Rating } from "./Rating/Rating";

export interface CasinoBodyProps {
  name: string;
  rating: number;
  betAmount: number;
  winAmount: number;
}

export const CasinoBody = ({
  name,
  rating,
  betAmount,
  winAmount,
}: CasinoBodyProps) => {
  return (
    <div className="info-container">
      <div className="hr-container"> 
        <Heading name={name} underlined />
        <Rating rating={rating} />
      </div>
      <div className="bonus-container">
        <Heading name="Bonus" weight="heavy" />
        <p className="bonus">
          <span>Bet £{betAmount}</span>
          <span>Get £{winAmount}</span>
        </p>
      </div>
    </div>
  );
};
