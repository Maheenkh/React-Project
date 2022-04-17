import React from "react";
/*  import MultiplePizzas from "../assets/multiplePizzas.jpeg"; */
import "../styles/About.css";
function About() {
  return (
    <div className="about">
     {/*  <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div> */}
      <div className="aboutBottom">
        <h1> ABOUT ME</h1>
        <p>
          I have done my graduation in Bachelors of Computer Engineering and have worked in a software house as a middleware engineer. I am very fond of designing and developing websites. I am very enthusiastic and hardworking individual.
        </p>
      </div>
    </div>
  );
}

export default About;
