import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { SliderProducts } from "../../data/products";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Slider.css'

const Slider = () => {
  return (
    <div className="s-container">
      <Swiper
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
      >
        {SliderProducts.map((slide, i) => (
          <SwiperSlide>
            <div className="lef-s">
                <div className="name">
                    <span>{slide.name}</span>
                    <span>{slide.title}</span>
                </div>
                <span>${slide.price}</span>
                <div>Shop now</div>
            </div>
            <img src={slide.img} alt="" className="imp-p" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
