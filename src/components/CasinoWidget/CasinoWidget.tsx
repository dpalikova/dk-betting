import "./CasinoWidget.css";
import Casino from "../../types/casino";
import { Button } from "../Button/Button";
import { LogoContainer } from "../LogoContainer/LogoContainer";
import { CasinoBody } from "./CasinoBody/CasinoBody";

export interface CasinoWidgetProps {
  data: Casino;
}

export const CasinoWidget = ({ data }: CasinoWidgetProps) => {
  return (
    <article className="casino-container">
      <LogoContainer
        logoUrl={data.logoUrl}
        alt={data.name}
        fill={data.logoBG}
      />
      <CasinoBody
        name={data.name}
        rating={data.rating}
        betAmount={data.betAmount}
        winAmount={data.winAmount}
      />
      <Button label="Bet Now" primary size="medium" />
    </article>
  );
};
