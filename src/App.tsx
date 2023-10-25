import CustomerBox from "./components/CustomerBox";
import Description from "./components/Description";
import RatingBox from "./components/RatingBox";
import "./sass/MainContainer.scss";
import colton from "./assets/image-colton.jpg";
import irene from "./assets/image-irene.jpg";
import anne from "./assets/image-anne.jpg";
import { useMediaQuery } from "react-responsive";

function App() {
  const isGreaterThan810px = useMediaQuery({ query: "(min-width: 810px)" });

  return (
    <main className="mainContainer">
      <section className="top">
        <Description />
        <div className="ratingContainer">
          <RatingBox
            desc="Rated 5 Stars in Reviews"
            transform={isGreaterThan810px ? "translateX(-10%)" : ""}
          />
          <RatingBox desc="Rated 5 Stars in Report Guru" />
          <RatingBox
            desc="Rated 5 Stars in BestTech"
            transform={isGreaterThan810px ? "translateX(10%)" : ""}
          />
        </div>
      </section>
      <section className="bottom">
        <CustomerBox
          image={colton}
          text="We needed the same printed design as the one we had ordered a week prior.Not only did they find the original order, but we also received it in time. Excellent!"
          fullName="Colton Smith"
        />
        <CustomerBox
          image={irene}
          text="Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."
          fullName="Irene Roberts"
          transform={isGreaterThan810px ? "translateY(15%)" : ""}
        />
        <CustomerBox
          image={anne}
          text="Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"
          fullName="Anne Wallace"
          transform={isGreaterThan810px ? "translateY(25%)" : ""}
        />
      </section>
    </main>
  );
}

export default App;
