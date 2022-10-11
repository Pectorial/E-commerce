import React, { useRef } from "react";

import { Carousel } from "react-responsive-carousel";

import Navbar from "../../components/navbar/navbar";
import BannerSlider from "../../components/slider/slider";
import classes from "./homepage.module.css";
import Product from "../../components/product/product";

import img1 from "../../assets/images/down.png";
import img2 from "../../assets/images/logo.png";
import img3 from "../../assets/images/Img.png";
import deliveryIcon from "../../assets/images/Delivery.png";
import checkmarkIcon from "../../assets/images/Checkmark.png";
import purchaseIcon from "../../assets/images/Purchase.png";
import sproutIcon from "../../assets/images/Sprout.png";

const Homepage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <BannerSlider />
      <main>
        <section className={classes.brand_section}>
        <div className={classes.brand_header}>
          <h3>What makes our brand different</h3>
        </div>
        <div className={classes.brand_flex}>
          <div>
            <img src={deliveryIcon} />
            <h4>Next day as standard</h4>
            <p>Order before 3pm and get your order the next day as standard</p>
          </div>
          <div>
            <img src={checkmarkIcon} />
            <h4>Made by true artsans</h4>
            <p>Handmade crafted goods made with real passion and craftmanship</p>
          </div>
          <div>
            <img src={purchaseIcon} />
            <h4>Unbeatable prices</h4>
            <p>For our materials and quality you won't find better price anywhere</p>
          </div>
          <div>
            <img src={sproutIcon} />
            <h4>Recycled packaging</h4>
            <p>We use 100% recycled packaging to ensure our footprint is manageable</p>
          </div>
        </div>
        </section>
        <section className={classes.products_category}>
            <div className={classes.products_category_nav}>
              <h3>Shop by category</h3>
              <ul>
                <li>All</li>
                <li>Appliances</li>
                <li>Furniture</li>
                <li>Fitness</li>
                <li>Electronics</li>
                <li>Clothing & Store</li>
              </ul>
            </div>
            <div className={classes.product_list}>
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              </div>
        </section>
        {/* <div>
            <h3>Whatever in here</h3>
        </div> */}
      </main>
    </React.Fragment>
  );
};

export default Homepage;
