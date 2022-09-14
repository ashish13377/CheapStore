import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header/Header';
import  Newsletters from '../components/layouts/Newsletters';
import Footer from '../components/footer/Footer';

import img1 from '../assets/images/background/img-login.jpg'

const Login = () => {
  return <div>
    <Header />
    <section className="fl-page-title">
        <div className="overlay"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="page-title-inner flex">
                        <div className="page-title-heading">
                            <h2 className="heading">Log In</h2>
                        </div>
                        <div className="breadcrumbs">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li>Log In</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="tf-section login-page">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="form-create-item-content">
                        <div className="form-create-item">
                            <div className="sc-heading">
                                <h3>Login Your Account</h3>
                                <p className="desc">Most popular gaming digital nft market place </p>
                            </div>
                            <form id="create-item-1" action="#" method="GET" acceptCharset="utf-8">
                                <input name="user" type="text" placeholder="User Name/Email Address"
                                    required />
                                <input name="number" type="password" placeholder="Password"
                                    required />
                                <div className="input-group style-2 ">
                                    <div className="btn-check">
                                        <input type="radio" id="html" name="fav_language" value="HTML" />
                                        <label htmlFor="html">Remember Me</label>
                                    </div>
                                </div>
                                <button name="submit" type="submit"
                                    className="sc-button style letter style-2"><span>Sing In</span> </button>
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
                            <img src={img1} alt="Bidzen" />
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

export default Login;
