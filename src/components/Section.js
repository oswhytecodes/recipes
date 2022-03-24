import react from "react";
import Card from "./Card";
import Photocard from "./Photocard";
import "./Section.css";
import recipeOne from "../assets/images/recipe1.jpg";
import recipeTwo from "../assets/images/recipe2.jpg";
import foodBg from "../assets/images/food.jpg";
import foodOne from "../assets/images/Food1.jpg";
import foodTwo from "../assets/images/food2.jpg";
import foodThree from "../assets/images/food3.jpg";
import foodFour from "../assets/images/food4.jpg";

import cardImgFruit from "../assets/images/fruits.png";
import cardImgSalad from "../assets/images/salad.png";
import cardImgFitness from "../assets/images/fitness.png";
import cardImgScale from "../assets/images/scale.png";

const Section = () => {
  return (
    <div>
      
      {/* services section 1 */}
      <section id="Services" className="section-container section-one">
        <div className=" subhead subhead-center">
          <h4>OUR SERVICES</h4>
          <h3>The New Tradition Is Good Nutrition</h3>
        </div>
        <div className="cards-container">
          <Card
            img={cardImgFruit}
            id="01"
            headerOne="Weight Loss"
            headerTwo="Diet Plan"
          />
          <Card
            img={cardImgSalad}
            id="02"
            headerOne="Food Salads"
            headerTwo="Personalized Nutritition"
          />
          <Card
            img={cardImgScale}
            id="03"
            headerOne="Food Sensitivities"
            headerTwo="Excess Weight"
          />
          <Card
            img={cardImgFitness}
            id="04"
            headerOne="Daily Exercise Plan"
            headerTwo="Exercise Program"
          />
        </div>
      </section>

      {/*  */}
      {/* recipes section 2 */}

      <section id="Recipes" className="section-container section-two recipes">
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
      {/*  */}
      {/* about section 3 */}
      <section id="About" className="section-container section-one about-us">
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
      {/*  */}
      {/* recipe book section 4 */}
      <section
        id="Recipe_Book"
        className="section-container section-one recipe-book"
      >
        <div className="subhead subhead-center">
          <h4>Recipe Book</h4>
          <h3>Our Healthy Popular Items</h3>
        </div>

        <div className="photo-card-container">
          <Photocard
            recipeImg={foodOne}
            text="Wealth and WellBeing"
            price="$45"
          />
          <Photocard
            recipeImg={foodTwo}
            text="Wealth and WellBeing"
            price="$45"
          />
          <Photocard
            recipeImg={foodThree}
            text="Nutrition Lookbook"
            price="Add to cart"
          />
          <Photocard
            recipeImg={foodFour}
            text="The Power of Fruits"
            price="$45"
          />
        </div>
      </section>
    </div>
  );
};

export default Section;
