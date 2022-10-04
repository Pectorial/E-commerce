import React, { useRef } from "react";

import { Carousel } from "react-responsive-carousel";

import Navbar from "../../components/navbar/navbar";
import BannerSlider from "../../components/slider/slider";
import classes from "./homepage.module.css";

import img1 from "../../assets/images/down.png"
import img2 from "../../assets/images/logo.png"
import img3 from "../../assets/images/Img.png"

const Homepage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <BannerSlider />
      {/* <Carousel axis="horizontal">
        <div>
          <img src={img1} height={100} width={100} />
          <p>Legend 1</p>
        </div>
        <div>
          <img src={img2} height={100} width={100} />
          <p>Legend 2</p>
        </div>
        <div>
          <img src={img3} height={100} width={100} />
          <p>Legend 3</p>
        </div>
      </Carousel> */}
    </React.Fragment>
  );
};

export default Homepage;
