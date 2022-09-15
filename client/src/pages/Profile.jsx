import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/header/Header';
import 'react-tabs/style/react-tabs.css';
import Newsletters from '../components/layouts/Newsletters';
import Footer from '../components/footer/Footer';
import img1 from '../assets/image1.png'

const Profile = () => {

    return <div className='item-details'>
        <Header />
        <section className="fl-page-title">
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="page-title-inner flex">
                            <div className="page-title-heading">
                                <h2 className="heading">My Profile</h2>
                            </div>
                            <div className="breadcrumbs">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li>My Profile</li>
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

                    </div>
                    <div className="col-xl-9 col-lg-12 col-md-12">
                        <div style={{ display: "flex", paddingBottom: "10px"}}>
                        <h2 style={{marginRight: "20px"}}>Ashish Kumar</h2>
                        <button name="submit" type="submit"
                                       style={{ backgroundColor: "#dc39fc00",}}><span>Edit</span> </button>
                        </div>
                       

                        <p style={{ fontSize: " 17px" }}> Style is a reflection of your attitude and your personality.</p>
                        <hr></hr>
                        <div style={{  display: "flex",  alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
                            <br></br>
                            <br></br>
                            <img src={img1} alt="Sell New" />
                            <p style={{ fontSize:"20px", fontweight:"bold" , padding: "10px" }}> There are no Ads </p>
                            <p style={{ fontSize:"15px" }}>When users post ads, will appear here. If you want to post something you can do it now</p>
                            <br></br>
                            <button name="submit" type="submit"
                                       style={{ backgroundColor: "#dc39fc00", }}><span>Start Selling</span> </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Newsletters />
        <Footer />
    </div>;
};

export default Profile;
