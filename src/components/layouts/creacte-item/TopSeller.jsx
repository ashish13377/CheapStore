import React from 'react';
import { Link } from 'react-router-dom';

const TopSeller = props => {
    const data = props.data
  return (
    <div className="tf-section top-seller">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="sc-heading style-3">
                        <h3>Top Sellers</h3>
                        <p className="desc">Most popular gaming digital nft market place </p>
                    </div>
                </div>
                {
                    data.slice(0,4).map((item,index)=> (
                        <div key={index} className="col-lg-3 col-md-6">
                            <div className={`sc-author-card style-2 ${item.active}`}>
                                <div className="card-media">
                                    <img src={item.img} alt="Bidzen" />
                                </div>
                                <div className="card-avatar">
                                    <img src={item.avt} alt="Bidzen" />
                                </div>
                                <div className="card-content">
                                    <h5><Link to="/authors">{item.name}</Link> </h5>
                                    <div className="details">{item.postion}</div>
                                    <div className="card-bottom">
                                        <div className="widget-social">
                                            <ul>
                                                <li><Link to="#" className="active"><i className="fab fa-facebook-f"></i></Link>
                                                </li>
                                                <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                                                <li><Link to="#"><i className="fab fa-youtube"></i></Link></li>
                                            </ul>
                                        </div>
                                        <Link to="/login" className="sc-button style-2"><span>Follow</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  );
};

export default TopSeller;
