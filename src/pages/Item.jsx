import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/header/Header';
import LiveAutions from '../components/layouts/item/LiveAutions';
import dataPopularCollection from '../assets/fake-data/dataPopularCollection';
import  Newsletters from '../components/layouts/Newsletters';
import Footer from '../components/footer/Footer';

const Item = () => {
  return <div className='item'>
    <Header />
    <section className="fl-page-title">
        <div className="overlay"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="page-title-inner flex">
                        <div className="page-title-heading">
                            <h2 className="heading">Item (Auctions)</h2>
                        </div>
                        <div className="breadcrumbs">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li>Item (Auctions)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <LiveAutions data={dataPopularCollection} />
    <Newsletters />
    <Footer />
  </div>;
};

export default Item;
