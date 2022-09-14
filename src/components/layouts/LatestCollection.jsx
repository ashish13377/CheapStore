import React from 'react';
import { Link } from 'react-router-dom'

const LatestCollection = props => {
    const data = props.data
  return (
    <section className="tf-section creators-page">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="sc-heading">
                    <h3>Our Creators</h3>
                    <p className="desc">Most popular gaming digital nft market place </p>
                </div>
            </div>
            {
                data.map((item,index)=> (
                    <div key={index} className={item.col}>
                    <div className="sc-product-item style-4">
                        <div className="product-img flex">
                            <div className="img-left">
                                <img src={item.img} alt="Bidzen" />
                                <label>{item.tags}</label>
                            </div>
                            <div className="img-right">
                                <div className="top-img flex">
                                    <img src={item.img1} alt="Bidzen" />
                                    <img src={item.img2} alt="Bidzen" />
                                </div>
                                <div className="bottom-img">
                                    <img src={item.img3} alt="Bidzen" />
                                </div>
                            </div>
                        </div>
                        <div className="product-content">
                            <h5 className="title"><Link to="/item-details">{item.title}</Link> </h5>
                            <div className="product-author flex mg-bt-0">
                                <div className="left flex">
                                    <div className="avatar">
                                        <img src={item.imgAuthor} alt="Bidzen" />
                                    </div>
                                    <div className="infor">
                                        <div className="author-name"><Link to="/authors">{item.name}</Link>
                                        </div>
                                        <span>Creator</span>
                                    </div>
                                </div>
                                <div className="button-wishlish">
                                    <Link to="#" className=" wishlish"><i
                                            className="fas fa-heart"></i></Link>
                                    <span>{item.wishlist}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))
            }

        </div>
    </div>
</section>
    );
};

export default LatestCollection;
