import React, {useState} from 'react';
import {SliderData} from './SliderData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';

const ImageSlider = ({slides}) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }
    //shows current image #, not required
    console.log(current);

    if (!Array.isArray(slides) || slides.length <= 0) {
        console.log("Slides Missing Data");
        return null;
    }

    return (
        <section className="slider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
            {SliderData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide-active' : 'slide'} key={index}>
                        {index === current && (
                            <img src={slide.image} alt="NO IMAGE FOUND" className="displayImage"/>
                            )}
                    </div>
                )
            })}
        </section>
    )
}

export default ImageSlider