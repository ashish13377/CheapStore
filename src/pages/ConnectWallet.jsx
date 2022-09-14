import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/header/Header';
import WalletConnect from '../components/layouts/WalletConnect';
import  Newsletters from '../components/layouts/Newsletters';
import Footer from '../components/footer/Footer';

const ConnectWallet = () => {
  return <div>
    <Header />
    <section className="fl-page-title">
        <div className="overlay"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="page-title-inner flex">
                        <div className="page-title-heading">
                            <h2 className="heading">Wallet-Connect</h2>
                        </div>
                        <div className="breadcrumbs">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li>Wallet-connect</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <WalletConnect />
    <Newsletters />
    <Footer />
  </div>;
};

export default ConnectWallet;
