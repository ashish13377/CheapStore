import React from 'react';
import { Link } from 'react-router-dom'

const TrendingCollections = props => {
    const data = props.data
  return (
    <section className="tf-trendy-collections tf-section">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="sc-heading style-2">
                        <div className="content-left">
                            <div className="inner">
                                <h3>Trendy Collection</h3>
                                <p className="desc">Most popular gaming digital nft market place </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='trendy'>
                    {
                        data.map((item,index) =>(
                            <div key={index} className='col-lg-4 col-md-6 col-12'>
                                <div className="sc-product-item style-2">
                                        <div className="product-img">
                                            <img src={item.img} alt="Bidzen" />
                                            <Link to="/connect-wallet"
                                                className="sc-button style letter"><span>Place Bid</span></Link>
                                            <label>{item.tags}</label>
                                        </div>
                                        <div className="product-content">
                                            <h5 className="title"><Link to="/item-details">{item.title}</Link> </h5>
                                            <div className="product-author flex">
                                                <div className="avatar">
                                                    <img src={item.imgAuthor} alt="Bidzen" />
                                                </div>
                                                <div className="infor">
                                                    <div className="author-name"><Link to="/authors">{item.name}</Link></div>
                                                    <span>Creator</span>
                                                </div>
                                            </div>
                                            <div className="product-price flex">
                                                <div className="title">Current Bid</div>
                                                <div className="price">
                                                    <span>{item.price}</span>
                                                    <span>= {item.priceChange}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    </section>
  );
};

export default TrendingCollections;
