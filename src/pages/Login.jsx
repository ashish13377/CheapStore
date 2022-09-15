import React from 'react';
import DarkMode from "../components/header/DarkMode"

import img1 from '../assets/images/background/img-login.jpg'

const Login = () => {
  return <div>


    <section className="tf-section login-page">
        <div className="container">
            <div className="row">\
            <DarkMode/>
                <div className="col-md-12">
                    <div className="form-create-item-content">
                        <div className="form-create-item">
                            <div className="sc-heading">
                                <h3>Login Your Account</h3>
                                <p className="desc">Most popular gaming digital nft market place </p>
                            </div>
                            <form id="create-item-1" action="#" method="GET" acceptCharset="utf-8">
                                <input name="user" type="text" placeholder="User Name"
                                    required />
                                <input name="number" type="password" placeholder="Password"
                                    required />
    
                                <button name="submit" type="submit"
                                    className="sc-button style letter style-2"><span>Sign In</span> </button>
                            </form>
                         
                        </div>
                        <div className="form-background">
                            <img src={img1} alt="Bidzen" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   
  
  </div>;
};

export default Login;
