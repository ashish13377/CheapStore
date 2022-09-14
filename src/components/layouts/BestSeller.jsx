import React from 'react';
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y } from 'swiper';

const BestSeller = props => {
    const data = props.data;
  return (
    <section className="tf-section best-seller-page style-2">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="sc-heading style-2">
                        <div className="content-left">
                            <div className="inner">
                                <h3>Best Sellers</h3>
                                <p className="desc">Most popular gaming digital nft market place </p>
                            </div>
                        </div>
                        <div className="content-right">
                            <Link to="/explore-01" className="sc-button style letter style-2"><span>Explore More</span> </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="swiper-container author-best">
                        <div className="swiper-wrapper">
                        <Swiper
                            modules={[ Pagination, Scrollbar, A11y]}
                            spaceBetween={30}

                            breakpoints={{
                                0: {
                                    slidesPerView: 2,
                                    },
                                767: {
                                    slidesPerView: 4,
                                },
                                991: {
                                    slidesPerView: 5,
                                },
                                1300: {
                                    slidesPerView: 6,
                                    },
                                }}
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                        >
                        {
                            data.map((item,index) => (
                                <SwiperSlide className={item.styleclass} key={index}>
                                    <div className="swiper-slide">
                                        <div className="slider-item">
                                            <div className="sc-author">
                                                <div className="card-avatar">
                                                    <img src={item.img} alt="Bidzen" />
                                                </div>
                                                <div className="infor">
                                                    <h6> <Link to="/authors">{item.name}</Link> </h6>
                                                    <div className="details">{item.price}</div>
                                                </div>
                                                <Link to="/login" className="sc-button btn-bordered-white"><span>Follow</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                        </Swiper>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default BestSeller;
