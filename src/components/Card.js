import react from "react";
import "./Card.css";
import Fruit from '../assets/images/fruits.png'

const Card = () => {
  return (
    <div className="card-container">
      <div className="card-header ">
        <img src={Fruit} alt="" />
        <p>01</p>
      </div>
      <p className="one">Weight Loss</p>
      <p className="two">Diet Plan</p>
      <p className="card-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <hr />
      <div>
        <a className="card-link" href="#">
          {" "}
          Read More
        </a>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Card;
