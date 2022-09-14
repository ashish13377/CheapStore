import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/header/Header';
import  Newsletters from '../components/layouts/Newsletters';
import Footer from '../components/footer/Footer';

import img from '../assets/images/background/img-register.jpg'

const Register = () => {
  return <div>
    <Header />
    <section className="fl-page-title">
        <div className="overlay"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="page-title-inner flex">
                        <div className="page-title-heading">
                            <h2 className="heading">Register</h2>
                        </div>
                        <div className="breadcrumbs">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li>Register</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="tf-section login-page register-page">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="form-create-item-content">
                        <div className="form-create-item">
                            <div className="sc-heading">
                                <h3>Create An Account</h3>
                                <p className="desc">Most popular gaming digital nft market place </p>
                            </div>
                            <form id="create-item-1" action="#" method="GET" acceptCharset="utf-8">
                                <div className="input-group">
                                    <input name="name" type="text" placeholder="First Name"
                                        required />
                                    <input name="name" type="text" placeholder="Last Name" required />
                                </div>
                                <div className="input-group">
                                    <input name="phone" type="text" placeholder="Phone Number"
                                        required />
                                    <input name="name" type="text" placeholder="User Name" required />
                                </div>
                                <input name="email" type="email" placeholder="Email Address"
                                    required />
                                <div className="input-group">
                                    <input name="password" type="password" placeholder="Password"
                                        required />
                                    <input name="password" type="password" placeholder="Re-Password"
                                        required />
                                </div>
                                <div className="input-group style-2 ">
                                    <div className="btn-check">
                                        <input type="radio" id="html" name="fav_language" className="mg-bt-0"
                                            value="HTML" />
                                        <label htmlFor="html">Remember Me</label>
                                    </div>
                                </div>
                                <button name="submit" type="submit"
                                    className="sc-button style letter style-2"><span>Register Now</span> </button>
                            </form>
                            <div className="other-login">
                                <div className="text">Or</div>
                                <div className="widget-social">
                                    <ul>
                                        <li><Link to="#" className="active"><i className="fab fa-facebook-f"></i></Link>
                                        </li>
                                        <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link to="#"><i className="fab fa-google-plus-g"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="form-background">
                            <img src={img} alt="Bidzen" />
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

export default Register;
