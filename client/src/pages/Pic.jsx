import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/header/Header';
import 'react-tabs/style/react-tabs.css';
import Newsletters from '../components/layouts/Newsletters';
import Footer from '../components/footer/Footer';
const Pic = () => {

    return <div className='item-details'>
        <Header />
        <section className="fl-page-title">
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="page-title-inner flex">
                            <div className="page-title-heading">
                                <h2 className="heading">Profile Picture</h2>
                            </div>
                            <div className="breadcrumbs">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li>Profile Picture</li>
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
                    <div className="col-xl-3 col-lg-12 col-md-12" >
                        <div className="">
                            <div style={{ marginTop: "20px" }}>
                                <h4 style={{ margin: "10px" }}> <Link to="/editprofile/info"> Edit Profile</Link></h4>
                                <h4 style={{ margin: "10px" }}> <Link to="/editprofile/pic"> Profile Picture</Link></h4>
                                <Link to="/connect-wallet"
                                    className="sc-button style letter style-2 style-item-details" style={{ margin: "10px" }}><span>View Profile</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-12 col-md-12" style={{ border: "1px solid", padding: "30px" }}>
                        <div className="" >
                            <h3> Profile picture</h3>
                            <hr></hr>
                            <div class="row">
                                <div class="col-4">
                                
                                </div>
                                <div class="col-8">
                                <p style={{ fontSize: '15px' }}>Clear photos are an important way for buyers and sellers to learn about each other. Be sure doesn’t include any personal or sensitive info you’d rather not have others see.</p>
                                <br></br>
                                <br></br>
                                <p style={{ fontSize: '16px', fontWeight: 'bold'}}>It’s not much fun to chat with a landscape!</p>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <button name="submit" type="submit"
                                       style={{ backgroundColor: "#dc39fc00", }}><span>Upload</span> </button>
                                </div>
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

export default Pic;
