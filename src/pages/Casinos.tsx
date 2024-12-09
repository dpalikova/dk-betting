import casinos from "../assets/data/casinos";
import { CasinoWidget } from "../components/CasinoWidget/CasinoWidget";
import "./Casinos.css";

export default function Casinos() {
  return (
    <section className="casinos">
      <h1 className="page-heading">Best Casinos 2024</h1>
      <ul className="casinos-container">
        {casinos.map((casino) => (
          <li key={casino.id}>
            <CasinoWidget data={casino} />
          </li>
        ))}
      </ul>
    </section>
  );
}
