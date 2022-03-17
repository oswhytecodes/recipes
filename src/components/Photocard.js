import react from "react";
import "./Photocard.css";

const Photocard = ({ recipeImg, text, price }) => {
  return (
    <div className="photocard-container">
      <div className="photo-card">
        <img src={recipeImg} alt="" />
        <p>{text}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default Photocard;
