import React, { forwardRef, useImperativeHandle, useState } from "react";
import classes from "./slider.module.css";
import styled from "styled-components";

const SlideWrapper = styled.div`
    text-align: center;
    box-sizing: border-box;
    width: 30%;
    margin: 20px;

    .slide_timer {
      margin: auto;
      width: 90%;
      height: 5px;
      border-radius: 15px;
      background-color: #999999;
      position: relative;
    }
    .slide_timer div {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      border-radius: 15px;
      width: 80%;
      background-color: #424040;
      animation: slide 5s linear infinite;
    }
    @keyframes slide {
      from {
        width: 0%;
      }
      to {
        width: 100%;
      }
    }
    .slide_text_active {
        color: #161616;
    }
    .slide_text_inactive {
        color: #7f7f7f;
    }
  `;

const BannerSlider = forwardRef((props, ref) => {

  let [slideIndex, setSlideIndex] = useState(1);
  // setInterval(() => {
  //   let currentslide = slideIndex;
  //   if(currentslide === 3) {
  //       return setSlideIndex(1)
  //   }
  //   currentslide += 1
  //   setSlideIndex(currentslide)
  // }, 5000);


  return (
    <section className={classes.container_section}>
      <div className={classes.slider_content}>
        {slideIndex == 1 ? (
          <div className={classes.slider_one}>
            <div className={classes.slide_info}>
              <h4>Fenty Face Serum</h4>
              <p>Save up to N30,000</p>
              <button>Buy Now</button>
            </div>
          </div>
        ) : null}
        {/* {slideIndex == 2 ? (
          <div className={classes.slider_one}>
            <div className={classes.slide_info}>
              <h4>Fenty Two Serum</h4>
              <p>Save up to N30,000</p>
              <button>Buy Now</button>
            </div>
          </div>
        ) : null}
        {slideIndex == 3 ? (
          <div className={classes.slider_one}>
            <div className={classes.slide_info}>
              <h4>Fenty three Serum</h4>
              <p>Save up to N30,000</p>
              <button>Buy Now</button>
            </div>
          </div>
        ) : null} */}
      </div>

      {/* <div className={classes.slide_indicator}>
        <SlideWrapper className={classes.slide_wrapper}>
          <div className="slide_timer">{slideIndex == 1 && <div></div>}</div>
          <p className={slideIndex == 1 ? "slide_text_active" : "slide_text_inactive"}>Next day as standard</p>
        </SlideWrapper>
        <SlideWrapper className={classes.slide_wrapper}>
          <div className="slide_timer">{slideIndex == 2 && <div></div>}</div>
          <p className={slideIndex == 2 ? "slide_text_active" : "slide_text_inactive"}>Next day as standard</p>
        </SlideWrapper>
        <SlideWrapper className={classes.slide_wrapper}>
          <div className="slide_timer">{slideIndex == 3 && <div></div>}</div>
          <p className={slideIndex == 3 ? "slide_text_active" : "slide_text_inactive"}>Next day as standard</p>
        </SlideWrapper>
      </div> */}
    </section>
  );
});

export default BannerSlider;
