import React , {useState} from 'react';
import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap';

const PopularCollection = props => {
    const data = props.data;

    const [visible , setVisible] = useState(12);
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 4);
    }
  return (
    <section className="tf-section trendy-colection-page style-2">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="wg-drop-category seclect-box">
                        <Dropdown>
                            <Dropdown.Toggle className="btn-selector nolink" id="dropdown-basic">
                                <span>All Categories</span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                            <Dropdown.Item href="#">
                                <span>NFT</span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                <span>Crypto</span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                <span>Token</span>
                            </Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle className="btn-selector nolink" id="dropdown-basic">
                                <span>New Items</span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                            <Dropdown.Item href="#">
                                <span>New bestsellers</span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                <span>New releases</span>
                            </Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown>
                            <Dropdown.Toggle className="btn-selector nolink" id="dropdown-basic">
                                <span>Buy Now</span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                            <Dropdown.Item href="#">
                                <span>Wallet</span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                <span>Website</span>
                            </Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle className="btn-selector nolink" id="dropdown-basic">
                                <span>Sort By</span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                            <Dropdown.Item href="#">
                                <span>View</span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                <span>Rating</span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                <span>Sale</span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                <span>Date</span>
                            </Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown>
                        <button className="sc-button style letter style-2"><span>Filter</span> </button>
                    </div>
                </div>
                {
                    data.slice(0,visible).map((item,index)=> (
                        <div key={index} className="fl-item col-xl-3 col-lg-4 col-md-6">
                            <div className="sc-product-item style-5">
                                <div className="product-img">
                                    <img src={item.img} alt="Bidzen" />
                                    <Link to="/connect-wallet"
                                        className="sc-button style letter"><span>Place Bid</span></Link>
                                    <label>{item.tags}</label>
                                    <div className="avatar-box">
                                        {
                                            item.avtList.map((item,index) => (
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
                    ))
                }
                
                {
                    visible < data.length && 
                    <div className="col-md-12">
                        <button id="loadmore" className=" sc-button style letter style-2" onClick={showMoreItems}><span>Explore More</span>
                        </button>
                     </div>
                }
            </div>
        </div>
    </section>
    );
};

export default PopularCollection;
