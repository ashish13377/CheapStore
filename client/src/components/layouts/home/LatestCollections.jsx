import React from 'react';
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

const LatestCollections = props => {
    const data = props.data;
    return (
        <section className="tf-latest-collections tf-section bg-color-2">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="sc-heading style-2">
                        <div className="content-left">
                            <div className="inner">
                                <h3>Latest Collections</h3>
                                <p className="desc">Most popular gaming digital nft market place </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="swiper-container latest-coll style-2">
                        <div className="swiper-wrapper">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={30}

                            breakpoints={{
                                0: {
                                    slidesPerView: "auto",
                                    },
                                767: {
                                    slidesPerView: "auto",
                                },
                                991: {
                                    slidesPerView: "auto",
                                },
                                1300: {
                                    slidesPerView: "auto",
                                    },
                                }}
                            navigation
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                        >
                        {
                            data.map((item,index) => (
                                <SwiperSlide className={item.styleclass} key={index}>
                                    <CollectionsItem item={item} />
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


const CollectionsItem = props => (
    <div className="slider-item">
        <div className="sc-product-item style-4 bg-color-dark">
            <div className="product-img flex">
                <div className="img-left">
                    <img src={props.item.img} alt="Bidzen" />
                    <label>{props.item.tags}</label>
                </div>
                <div className="img-right">
                    <div className="top-img flex">
                        <img src={props.item.img1}
                            alt="Bidzen" />
                        <img src={props.item.img2}
                            alt="Bidzen" />
                    </div>
                    <div className="bottom-img">
                        <img src={props.item.img3}
                            alt="Bidzen" />
                    </div>
                </div>
            </div>
            <div className="product-content">
                <h5 className="title"><Link to="/item-details">{props.item.title}</Link> </h5>
                <div className="product-author flex mg-bt-0">
                    <div className="left flex">
                        <div className="avatar">
                            <img src={props.item.imgAuthor} alt="Bidzen" />
                        </div>
                        <div className="infor">
                            <div className="author-name"><Link to="/authors">{props.item.name}</Link></div>
                            <span>Creator</span>
                        </div>
                    </div>
                    <div className="button-wishlish">
                        <Link to="#" className=" wishlish"><i
                                className="fas fa-heart"></i></Link>
                        <span>{props.item.wishlist}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

)

export default LatestCollections;
