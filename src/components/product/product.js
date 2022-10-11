import React from "react";
import classes from "./product.module.css";
import styled from "styled-components";

import productImg from "../../assets/images/Img.png";

const InitPrice = styled.div`
  text-decoration: line-through;
`

const Product = () => {
  return(
    <div className={classes.product_body}>
        <div className={classes.product_image}>
            <img src={productImg} />
        </div>
        <div className={classes.product_text_area}>
            <h3>Product title</h3>
            <p>Product description</p>
            <p>$144.99</p>
            <InitPrice>$186.99</InitPrice>
        </div>
    </div>
  )
};

export default Product;
