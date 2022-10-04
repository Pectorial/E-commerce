import React, { forwardRef, useImperativeHandle, useState } from "react";
import classes from "./slider.module.css";

const BannerSlider = forwardRef((props, ref) => {
    let [slideIndex, setSlideIndex] = useState(1);

    
    // setInterval(() => {
    //     if (slideIndex === 3) {
    //         return setSlideIndex(1)
    //     }
    //     setSlideIndex(3)
    //     console.log(slideIndex)
    // }, 1000);
    return (
        <section className={classes.container_section}>
            <div className={classes.slider_content}>
                {slideIndex == 1 && <div className={classes.slider_one}>
                    <div className={classes.slide_info}>
                        <h4>Fenty Face Serum</h4>
                        <p>Save up to N30,000</p>
                        <button>Buy Now</button>
                    </div>
                </div>}
                {slideIndex == 2 && <div className={classes.slider_two}>
                <div className={classes.slide_info}>
                        <h4>Fenty Two Serum</h4>
                        <p>Save up to N30,000</p>
                        <button>Buy Now</button>
                    </div>
                </div>}
                {slideIndex == 3 && <div className={classes.slider_three}>
                <div className={classes.slide_info}>
                        <h4>Fenty three Serum</h4>
                        <p>Save up to N30,000</p>
                        <button>Buy Now</button>
                    </div>
                </div>}
            </div>

            <div className={classes.slide_indicator}>

            </div>
        </section>
    )
})

export default BannerSlider;