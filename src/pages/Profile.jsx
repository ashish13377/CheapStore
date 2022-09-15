import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/header/Header';
import 'react-tabs/style/react-tabs.css';
import Newsletters from '../components/layouts/Newsletters';
import Footer from '../components/footer/Footer';
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
                                <h2 className="heading">Profile Details</h2>
                            </div>
                            <div className="breadcrumbs">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li>Profile Page</li>
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
                                <h4 style={{ margin: "10px" }}> <Link to="/authors"> Edit Profile</Link></h4>
                                <h4 style={{ margin: "10px" }}> <Link to="/authors"> Profile Picture</Link></h4>
                                <Link to="/connect-wallet"
                                    className="sc-button style letter style-2 style-item-details" style={{ margin: "10px" }}><span>View Profile</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-12 col-md-12" style={{ border: "1px solid", padding: "30px" }}>
                        <div className="" >
                            <h3> Edit profile </h3>
                            <hr></hr>
                            <h5 style={{ marginBottom: "10px" }}>Basic information</h5>
                            <form id="create-item-1" action="#" method="GET" acceptCharset="utf-8">

                                <div className="input-group">
                                    <input name="name" type="text" placeholder="Ashish" required />
                                    <input name="lastname" type="text" placeholder="Kumar"
                                        required />
                                </div>
                                <textarea id="comment-message" name="message" tabIndex="4"
                                    placeholder="About me (Optional)" aria-required="true" style={{ resize: "none" }}></textarea>
                                <hr></hr>
                                <h5 style={{ marginBottom: "10px" }}>Contact information</h5>
                                <div className="input-group">
                                    <input name="number" type="text" placeholder="+91 62044 77640" required />
                                    <input name="email" type="text" placeholder="trojan@example.com" required />
                                </div>
                                <hr></hr>
                                <h5 style={{ marginBottom: "10px" }}>Additional information</h5>
                                <div class="row">
                                    <div class="col-sm-8">
                                        <p style={{ fontSize: "19px" }}>Google</p>
                                        <p className="desc">Link your Google account to seamlessly use your contact list.</p>
                                    </div>
                                    <div class="col-sm-4"><button name="submit" type="submit"
                                       style={{ backgroundColor: "#dc39fc00", }}><span>Unlink</span> </button></div>
                                </div>
                                <hr></hr>
                                <div class="row">
                                    <div class="col-6">
                                        <button name="submit" type="submit" id="submit" style={{ backgroundColor: "#dc39fc00", width: "45%"}}><span>Discard</span> </button>
                                    </div>
                                    <div class="col-6"><button name="submit" type="submit" id="submit"
                                        className="sc-button style letter style-2"><span>Save Changes</span> </button>
                                    </div>
                                </div>


                            </form>




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
