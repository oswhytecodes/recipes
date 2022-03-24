import react from "react";
import "./Card.css";
import Fruit from "../assets/images/fruits.png";

const Card = ({ img, id, headerOne, headerTwo, text, link }) => {
  return (
    <div className="card-container">
      <div className="card-header ">
        <img src={img} alt="" />
        <p>{id}</p>
      </div>
      <p className="one">{headerOne}</p>
      <p className="two">{headerTwo}</p>
      <p className="card-text">
        {text}Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <hr />
      <div>
        <a className="card-link" href="#">
          {link}
          Read More
        </a>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Card;
