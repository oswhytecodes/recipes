import react from "react";
import "./Photocard.css";


const Photocard = ({ recipeImg, text, price }) => {
  return (
    <div className="photocard-container">
      <img src={recipeImg} alt="" />

      <div className="photo-card">
        <p>{text}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default Photocard;
