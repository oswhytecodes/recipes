import react from "react";
import "./Hero.css";
import heroImg from "../assets/images/hero.jpg";

const Hero = () => {
  return (
    <div className="container">
      {/* Hero Img */}
      <div className="hero-section">
        <div className="hero-img">
          <img src={heroImg} alt="" />
        </div>
        {/* Hero Text */}
        <div className="hero-text">
          <h1> Perfectly Light </h1> <h1> In Every Bite </h1>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In cumque
            deserunt obcaecati repellendus non.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
