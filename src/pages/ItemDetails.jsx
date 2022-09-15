import React , {useState} from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/header/Header';
import Countdown from 'react-countdown';
import { Tab, Tabs, TabList, TabPanel  } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import  Newsletters from '../components/layouts/Newsletters';
import Footer from '../components/footer/Footer';

import img1 from '../assets/images/avatar/avt-6.jpg'
import img2 from '../assets/images/avatar/avt-2.jpg'
import img3 from '../assets/images/avatar/avt-4.jpg'
import imgdetail1 from '../assets/images/product-item/auction-detail.jpg'
import avt1 from '../assets/images/avatar/avt-4.jpg'
import avt2 from '../assets/images/avatar/avt-6.jpg'
import avt3 from '../assets/images/avatar/avt-3.jpg'

const ItemDetails = () => {
    const [dataHistory] = useState(
        [
            {
                img: img1,
                name:"@Johnson",
                time: "8 hours ago ",
                price: "25 ETH ",
            },
            {
                img: img2,
                name:"@Johnson",
                time: "8 hours ago ",
                price: "25 ETH ",
            },
            {
                img: img3,
                name:"@Johnson",
                time: "8 hours ago ",
                price: "25 ETH ",
            },
        ]
    )
  return <div className='item-details'>
        <Header />
        <section className="fl-page-title">
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="page-title-inner flex">
                            <div className="page-title-heading">
                                <h2 className="heading">Auctions Details</h2>
                            </div>
                            <div className="breadcrumbs">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li>Auctions Details</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="tf-section item-details-page">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-12 col-md-12">
                            <div className="item-media">
                                <div className="media">
                                    <img src={imgdetail1} alt="Bidzen" />
                                </div>
                                <div className="countdown style-2">
                                    <Countdown  date={Date.now() + 500000000} />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12 col-md-12">
                            <div className="content-item">
                                <h3> Mission For Ghost Fighter</h3>
                                <p className="mg-bt-42">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                                    inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                                    ipsam voluptatem quia voluptas sit aspernatur aut</p>
                                <div className="author-item">
                                    <div className="avatar">
                                        <img src={avt1} alt="Bidzen" />
                                    </div>
                                    <div className="infor">
                                        <div className="create">Owner By</div>
                                        <h6><Link to="/authors">Duane M. Mendoza</Link> </h6>
                                        <div className="widget-social">
                                            <ul>
                                                <li><Link to="#" className="active"><i className="fab fa-facebook-f"></i></Link>
                                                </li>
                                                <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                                                <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <ul className="list-details-item">
                                    <li><span className="name">Current Price 1.5 ETH</span><span
                                            className="price">$500.89</span> <span className="pagi">1 of 5</span> </li>
                                    <li>Size 14000 x 14000 px</li>
                                    <li> Volume Traded 64.1</li>
                                </ul>
                                <div className="author-bid">
                                    <div className="author-item">
                                        <div className="avatar">
                                            <img src={avt2} alt="Bidzen" />
                                        </div>
                                        <div className="infor">
                                            <h6><Link to="/authors">Keith J. Kelley</Link> </h6>
                                            <div className="create">Creators</div>
                                        </div>
                                    </div>
                                    <div className="author-item">
                                        <div className="avatar">
                                            <img src={avt3} alt="Bidzen" />
                                        </div>
                                        <div className="infor">
                                            <h6><Link to="/authors">David Michels</Link> </h6>
                                            <div className="create">Collection</div>
                                        </div>
                                    </div>

                                </div>
                                <div className="infor-bid">
                                    <div className="content-left">
                                        <h6>Highest Bid</h6>
                                        <div className="price">9.3 BNB</div>
                                    </div>
                                    <div className="pagi">1 Of 9</div>
                                </div>
                                <Link to="/connect-wallet"
                                    className="sc-button style letter style-2 style-item-details"><span>Place Bid</span>
                                </Link>
                                <div className="flat-tabs themesflat-tabs">
                                <Tabs>
                                        <TabList>
                                        <Tab>Bid</Tab>
                                        <Tab>History</Tab>
                                        <Tab>Details</Tab>
                                        </TabList>

                                        <TabPanel>
                                            <ul className="bid-history-list">
                                            {
                                                dataHistory.map((item, index) => (
                                                    <li key={index}>
                                                        <div className="content">
                                                            <div className="author-item">
                                                                <div className="avatar">
                                                                    <img src={item.img} alt="Bidzen" />
                                                                </div>
                                                                <div className="infor">
                                                                    <p>Bid listed for <span className="status">{item.price}</span> 
                                                                    {item.time}
                                                                        by <span className="creator">{item.name}</span> </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))
                                            }
                                            </ul>
                                        </TabPanel>
                                        <TabPanel>
                                            <ul className="bid-history-list">
                                                <li>
                                                    <div className="content">
                                                        <div className="author-item">
                                                            <div className="avatar">
                                                                <img src={img1} alt="Bidzen" />
                                                            </div>
                                                            <div className="infor">
                                                                <p>Bid listed for <span className="status">25 ETH 8</span>
                                                                    hours ago
                                                                    by <span className="creator">@Johnson</span> </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </TabPanel>
                                        <TabPanel>
                                            <div className="provenance">
                                                <p>lorem Ipsum is simply dummy text of the printing and typesetting
                                                    industry.
                                                    Lorem Ipsum has been the industry's standard dummy text ever since
                                                    the 1500s,
                                                    when an unknown printer took a galley of type and scrambled it to
                                                    make a type specimen book.
                                                    It has survived not only five centuries, but also the leap into
                                                    electronic typesetting,
                                                    remaining essentially unchanged. It was popularised in the 1960s
                                                    with the release of Letraset sheets containing Lorem Ipsum passages,
                                                    and more recently with desktop publishing software like Aldus
                                                    PageMaker including versions of Lorem Ipsum.</p>
                                            </div>
                                        </TabPanel>
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
       
        <Newsletters />
        <Footer />
  </div>;
};

export default ItemDetails;
