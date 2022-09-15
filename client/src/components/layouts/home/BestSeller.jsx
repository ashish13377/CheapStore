import React from 'react';
import { Link } from 'react-router-dom'

const BestSeller = props => {
    const data = props.data;
  return (
    <section className="tf-best-seller">
        <div className="best-seller-inner">
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
                {
                    data.slice(0,6).map((item,index) => (
                        <div key={index} className="col-lg-2 col-md-4 col-6">
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
                    ))
                }
            </div>
        </div>
    </section>
  );
};

export default BestSeller;
