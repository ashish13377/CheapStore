import React from 'react';
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y , Grid  } from 'swiper';

const PopularCollection = props => {
    const data = props.data
  return (
    <section className="popular-collections tf-section bg-color-4">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="sc-heading style-2">
                    <div className="content-left">
                        <div className="inner">
                            <h3>Popular Collection</h3>
                            <p className="desc">Most popular gaming digital nft market place </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-12">
                <div className="swiper-container popular-coll">
                    <div className="swiper-wrapper">
                    <Swiper
                        modules={[Navigation, Scrollbar, A11y , Grid]}
                        spaceBetween={30}

                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                },
                            767: {
                                slidesPerView: 2,
                            },
                            991: {
                                slidesPerView: 3,
                            },
                            1300: {
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
                                            <div className="sc-product-item style-5">
                                                <div className="product-img ">
                                                    <img src={item.img} alt="Bidzen" />
                                                    <Link to="/connect-wallet"
                                                        className="sc-button style letter"><span>Place Bid</span></Link>
                                                    <label>{item.tags}</label>
                                                    <div className="avatar-box">
                                                        {
                                                            item.avtList.map((item,index)=> (
                                                                <img key={index} src={item.img1} alt="Bidzen" />
                                                            ))
                                                        }
                                                        
                                                    </div>
                                                </div>
                                                <div className="product-content">
                                                    <h5 className="title"><Link to="/item-details">{item.title}</Link> </h5>
                                                    <div className="product-author flex">
                                                        <div className="avatar">
                                                            <img src={item.avt} alt="Bidzen" />
                                                        </div>
                                                        <div className="infor">
                                                            <div className="author-name"><Link to="/authors">{item.name}</Link></div>
                                                            <span>Creator</span>
                                                        </div>
                                                    </div>
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

export default PopularCollection;
