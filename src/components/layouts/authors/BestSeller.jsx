import React from 'react';
import { Link } from 'react-router-dom'

const TopSeller = props => {
    const data = props.data;
    return (
        <section className="tf-section top-seller-page">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="sc-heading style-2">
                            <div className="content-left">
                                <div className="inner">
                                    <h3>Top Sellers</h3>
                                    <p className="desc">Most popular gaming digital nft market place </p>
                                </div>
                            </div>
                            <div className="content-right">
                                <Link to="/explore-01" className="sc-button style letter style-2"><span>Explore More</span> </Link>
                            </div>
                        </div>
                    </div>
                    {
                        data.slice(0,6).map((item,index) => (
                            <div key={index} className="col-xl-4 col-lg-6 col-md-6">
                                <div className="sc-author style-2">
                                    <div className="card-avatar">
                                        <img src={item.img} alt="Bidzen" />
                                    </div>
                                    <div className="infor">
                                        <h5><Link to="/authors">{item.name}</Link></h5>
                                        <div className="details">{item.price}</div>
                                        <ul className="rating">
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li className="un-rate"><i className="fas fa-star"></i></li>
                                        </ul>
                                    </div>
                                    <div className="button-follow">
                                        <Link to="/login" className="sc-button style-2"><span>Follow</span></Link>
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

export default TopSeller;
