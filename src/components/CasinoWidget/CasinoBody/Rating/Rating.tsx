import "./Rating.css";
import fullStar from "/img/Star-full.png";
import emptyStar from "/img/Star-empty.png";

interface RatingProps {
  rating: number;
}

export const Rating = ({ rating }: RatingProps) => {
  const maxStars = 5;
  const stars = Array.from({ length: maxStars }, (_, index) => index + 1);

  return (
    <ul className="rating-container">
      {stars.map((star) => (
        <li key={star}>
          <img
            className="star"
            src={rating >= star ? fullStar : emptyStar}
            alt={rating >= star ? "Full Star" : "Empty Star"}
          />
        </li>
      ))}
    </ul>
  );
};
