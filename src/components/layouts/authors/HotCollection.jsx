import React from 'react';
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y , Grid } from 'swiper';

const HotCollection = props => {
    const data = props.data
  return (
    <section className="hot-collections-page tf-section">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="sc-heading style-2">
                        <div className="content-left">
                            <div className="inner">
                                <h3>Hot Collection</h3>
                                <p className="desc">Most popular gaming digital nft market place </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="swiper-container popular-coll">
                        <div className="swiper-wrapper">
                        <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Grid]}
                        spaceBetween={30}

                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                },
                            767: {
                                slidesPerView: 2,
                            },
                            991: {
                                slidesPerView: 4,
                            },
                            }}
                        grid={{
                            "rows": 2
                        }}
                        navigation
                        scrollbar={{ draggable: true }}
                        >
                        {
                            data.map((item,index) => (
                                <SwiperSlide key={index}>
                                    <div className="swiper-slide">
                                        <div className="slider-item">
                                            <div className="sc-author-card">
                                                <div className="card-media">
                                                    <img src={item.img} alt="Bidzen" />
                                                </div>
                                                <div className="card-avatar">
                                                    <img src={item.avt} alt="Bidzen" />
                                                </div>
                                                <div className="card-content">
                                                    <h5><Link to="#">{item.name}</Link> </h5>
                                                    <div className="details">{item.postion}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default HotCollection;
