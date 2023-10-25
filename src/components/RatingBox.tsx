import star from "../assets/icon-star.svg";
import "../sass/RatingBox.scss";

interface Props {
  desc: string;
  transform?: string;
}

const RatingBox = ({ desc, transform }: Props) => {
  return (
    <article className="ratingBox" style={{ transform }}>
      <div className="stars">
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
      </div>
      <p className="desc">{desc}</p>
    </article>
  );
};

export default RatingBox;
