import React from "react";
import { Link } from "react-router-dom";
import { Navigation, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Slider01 = (props) => {
  const data = props.data;
  return (
    <section className="tf-slider slider">
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        scrollbar={{ draggable: true }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <SliderItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

const SliderItem = (props) => (
  <div className="swiper-container ">
    <div className="swiper-wrapper">
      <div className="swiper-slide">
        <div className="slider-item">
          <div className="overlay"></div>
          <div className="slider-inner flex home-1">
            <div className="slider-content">
              <h1 className="heading">
                Welcome to{" "}
                <h2 style={{ fontSize: "80px", color: "#dc39fc" }}>
                  CHEAP STORE
                </h2>
              </h1>
              <p className="sub-heading">
                Novel Resell Platform For Educational Instituitions
              </p>
              <div className="button-slider">
                <Link
                  to="/"
                  className="sc-button btn-bordered-white style letter "
                >
                  <span>Explore More</span>
                </Link>
                <Link
                  to="/post"
                  className="sc-button btn-bordered-white style file"
                >
                  <span>Sell Now</span>
                </Link>
              </div>
            </div>
            <div className="slider-img">
              <div className="img-home-1">
                <img src={props.item.img} alt="Bidzen" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Slider01;
