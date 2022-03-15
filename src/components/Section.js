import react from "react";
import Card from "./Card";
import "./Section.css";

const Section = () => {
  return (
    <section className="section-container">
      <div className="subhead">
        <h4>OUR SERVICES</h4>
        <h3>The New Tradition Is Good Nutrition</h3>
        </div>
        <div className="cards-container">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
    
    </section>
  );
};

export default Section;
