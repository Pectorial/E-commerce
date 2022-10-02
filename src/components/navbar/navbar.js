import React from "react";
import classes from "./navbar.module.css";
import logoImg from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className={classes.navBar}>
      <section className={classes.firstSegment}>
        <div className={classes.logo}>
          <h2>Atarodo</h2>
          <img src={logoImg} />
        </div>

        <div className={classes.delivery}>
          <i class="fa fa-map-marker" aria-hidden="true"></i>
          <h5>
            Delivery to <br /> <span style={{fontSize: "14px"}}>Abuja</span>
          </h5>
        </div>

        <div className={classes.search_container}>
            <div>
                <select className={classes.select}>
                    <option>All Categories</option>
                    <option>Furnitures</option>
                    <option>Electronics</option>
                    <option>Clothes</option>
                </select>
            </div>
            <div>
                <input className={classes.input} type="text" />
            </div>
            <div style={{color: "#18191A", fontSize: "22px"}}>
                <i class="fa fa-search" aria-hidden="true"></i>
            </div>
        </div>
        
        <div className={classes.cart_list}>
          <h5>
            Cart <br /> <span style={{fontSize: "14px"}}>3 items | N50,000</span>
          </h5>
        </div>
      </section>

      <section className={classes.secondSegment}>
        <div>
          <i class="fa fa-bars" aria-hidden="true"></i>
        </div>
          <div>
          <ul>
            <li>All Categories</li>
            <li>Deals of the day</li>
            <li>Gifts ideas</li>
            <li>Sell</li>
          </ul>
          </div>
      </section>
    </nav>
  );
};

export default Navbar;
