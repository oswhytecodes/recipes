import react from "react";
import Card from "./Card";
import Photocard from "./Photocard";
import "./Section.css";
import recipeOne from "../assets/images/recipe1.jpg";
import recipeTwo from "../assets/images/recipe2.jpg";
import foodBg from "../assets/images/food.jpg";


const Section = () => {
  return (
    <div>
      {/*  */}
      <section className="section-container section-one">
        <div className=" subhead subhead-center">
          <h4>OUR SERVICES</h4>
          <h3>The New Tradition Is Good Nutrition</h3>
        </div>
        <div className="cards-container">
          <Card id="01" headerOne="Weight Loss" headerTwo="Diet Plan" />
          <Card
            id="02"
            headerOne="Food Salads"
            headerTwo="Personalized Nutritition"
          />
          <Card
            id="03"
            headerOne="Food Sensitivities"
            headerTwo="Excess Weight"
          />
          <Card
            id="04"
            headerOne="Daily Exercise Plan"
            headerTwo="Exercise Program"
          />
        </div>
      </section>

      <section className="section-container section-two">
        <div className="subhead subhead-left">
          <h4>Recipes</h4>
          <h3>The New Tradition Is Good Nutrition</h3>
        </div>
        <div className="images">
          <img className="about-images" src={recipeOne} alt="Recipe book" />
          <img className="about-images" src={recipeTwo} alt="Recipe book " />
          <div className="tabs-container">
            <ul className="tabs-list">
              <li>Our History</li>
              <li>Our Vision</li>
              <li>Our Mission</li>
            </ul>
            <div className="tabs-block">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
                suscipit distinctio exercitationem aliquid corrupti voluptates,
                fugiat magnam quod unde? <br /> <br />
                Inventore laudantium maxime culpa amet voluptatibus iste
                expedita repellat ipsum doloremque!
              </p>
            </div>
          </div>
        </div>
      </section>
      <div>
        <img className="food-bg" src={foodBg} alt="Vegetables on a table" />
      </div>
      <section className="section-container section-one about-us">
        <div className="subhead subhead-center">
          <h4>About Us</h4>
          <h3>Eat Healthy, Be Nutrition Wealthy</h3>
        </div>
        <div>
          <form className="contact-form" action="">
            <input className="text-input" value="Enter your name" type="text" />
            <input
              className="text-input"
              value="Enter your email"
              type="text"
            />
            <input className="btn" value="Subscribe" type="submit" />
          </form>
        </div>
        <p className="form-quote">
          Receive an accurate quote within 3-5 days when you fill out this form.
          Or, give us a <br /> <br /> <a href="#">Call: (000)012-9841</a>{" "}
        </p>
      </section>

      <section className="section-container section-one">
        <div className="subhead subhead-center">
          <h4>Recipe Book</h4>
          <h3>Our Healthy Popular Items</h3>
        </div>

        <div className="photo-card-container">
          <Photocard />
          <Photocard />
          <Photocard />
          <Photocard />
        </div>
      </section>
    </div>
  );
};

export default Section;
