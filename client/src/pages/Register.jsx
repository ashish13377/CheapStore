import React from 'react';
import DarkMode from "../components/header/DarkMode"
import img from '../assets/images/background/img-register.jpg'

const Register = () => {
    return <div>
    <section className="tf-section login-page register-page">
    <div className="container">
    <div className="row">
    <DarkMode />
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
                                    
                                    <input name="studentid" type="text" placeholder="Student Id"
                                        required />
                                        <input name="email" type="email" placeholder="Email Address"
                                        required />
                                    <div className="input-group">
                                        <input name="password" type="password" placeholder="Password"
                                            required />
                                        <input name="password" type="password" placeholder="Re-Password"
                                            required />
                                    </div>
        
                                    <button name="submit" type="submit"
                                        className="sc-button style letter style-2"><span>Register Now</span> </button>
                                </form>
                             
                            </div>
                            <div className="form-background">
                                <img src={img} alt="Bidzen" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    </div>;
};

export default Register;
