import React from "react";
/*import { Link } from "react-router-dom"; */
import BannerImage from "../assets/main-pic.png" 
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Hi,</h1>
        <h1> I am Maheen Khalid</h1>
        <h1> Website Developer</h1>
        
         {/*    <Link to="/menu">
          <button> ORDER NOW </button>
        </Link> */} 
      </div>
    </div>
  );
}

export default Home;
