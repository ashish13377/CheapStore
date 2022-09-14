import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/header/Header';
import BestSeller from '../components/layouts/BestSeller';
import dataBestSeller from '../assets/fake-data/dataBestSeller'
import LatestCollection from '../components/layouts/LatestCollection';
import dataCollections from '../assets/fake-data/dataCollections2'
import  Newsletters from '../components/layouts/Newsletters';
import Footer from '../components/footer/Footer';

const Creator = () => {
  return (
    <div className='creator'>
    <Header />
    <section className="fl-page-title">
        <div className="overlay"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="page-title-inner flex">
                        <div className="page-title-heading">
                            <h2 className="heading">Creators</h2>
                        </div>
                        <div className="breadcrumbs">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li>Creators</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
     <BestSeller data={dataBestSeller} />
     <LatestCollection data={dataCollections} />
     <Newsletters />
     <Footer />
  </div>
 
  )
};

export default Creator;
