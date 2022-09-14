import React from 'react';
import { Link } from 'react-router-dom'

const Category = props => {
    const data = props.data;
  return (
    <section className="tf-category tf-section">
        <div className="category-inner">
            <div className="row">
                <div className="col-md-12">
                    <div className="sc-heading style-2">
                        <div className="content-left">
                            <div className="inner">
                                <h3>Poplar Categories</h3>
                                <p className="desc">Most popular gaming digital nft market place </p>
                            </div>
                        </div>
                        <div className="content-right">
                            <Link to="/item" className="sc-button style letter style-2"><span>Browse More</span> </Link>
                        </div>
                    </div>
                </div>
                {
                    data.map((item,index) =>(
                        <div key={index} className="col-lg-4 col-md-6 col-12">
                            <div className={`sc-category ${item.classpd}`}>
                                <div className="card-media">
                                    <img src={item.img} alt="Bidzen" />
                                </div>
                                <div className="card-content">
                                    <h5><Link to="/item-details">{item.title}</Link></h5>
                                    <p>{item.desc}</p>
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

export default Category;
