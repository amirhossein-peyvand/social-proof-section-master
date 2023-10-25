import "../sass/CustomerBox.scss";

interface Props {
  fullName: string;
  image: string;
  text: string;
  transform?: string;
}

const CustomerBox = ({ fullName, image, text, transform }: Props) => {
  return (
    <article className="box" style={{ transform }}>
      <section className="customerInfo">
        <img src={image} alt={fullName} />
        <div className="infoContainer">
          <span className="fullName">{fullName}</span>
          <span className="verified">Verified Buyer</span>
        </div>
      </section>
      <p className="text">{`"${text}"`}</p>
    </article>
  );
};

export default CustomerBox;
