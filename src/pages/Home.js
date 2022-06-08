import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import product from "../assets/product.png";

import "../styles/Home.css";

function Home() {
  return (
    // <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
    <div className="home">
      <div className="headerContainer">
        <h1> Quà Tặng </h1>

        <img src={product} />

        {/* <p> PIZZA TO FIT ANY TASTE</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link> */}
      </div>
    </div>
  );
}

export default Home;
