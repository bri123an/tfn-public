import React from 'react';
import ImageSlider from "./CarouselFunctions/ImageSlider";
import {SliderData} from "./CarouselFunctions/SliderData";


function Carousel() {
  return <ImageSlider slides={SliderData} />;
}

export default Carousel

