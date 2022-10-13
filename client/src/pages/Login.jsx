import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import DarkMode from "../components/header/DarkMode";
import { Helmet } from "react-helmet";
import { serverAPI } from "../App";

import img1 from "../assets/images/background/img-login.jpg";

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({});

  // Login..........................

  const handleLogin = (e) => {
    const newLoginData = { ...loginData };
    newLoginData[e.target.name] = e.target.value;
    setLoginData(newLoginData);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${serverAPI}/login/user`,
        loginData,
        {
          withCredentials: true,
        }
      );
      if (res.status === 200) {
        const data = res.data;
        if (data.admin) {
          Swal.fire({
            title: data.msg,
            icon: "success",
            confirmButtonText: "OK",
          });
          setLoginData({
            email: "",
            passowrd: "",
          });
          navigate("/admin");
        } else {
          Swal.fire({
            title: data.msg,
            icon: "success",
            confirmButtonText: "OK",
          });
          setLoginData({
            email: "",
            passowrd: "",
          });
          navigate("/");
        }
      }
    } catch (err) {
      Swal.fire({
        title: err.response.data.msg,
        icon: "danger",
        confirmButtonText: "OK",
      });
    }
  };
  return (
  <>
  
  <Helmet>
        <meta charSet="utf-8" />
        <title>CheapStore | Registerion </title>
      </Helmet>
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: "5px",
        }}
      >
        <DarkMode />
      </div>
      <section className="login-page">
        <div className="container" style={{ width: "1000px" }}>
          <div className="row">
            <div className="col-md-12">
              <div className="form-create-item-content">
                <div className="form-create-item">
                  <div className="sc-heading">
                    <h3>Login Your Account</h3>
                    <p className="desc">
                      Most popular gaming digital nft market place{" "}
                    </p>
                  </div>
                  <form
                    id="create-item-1"
                    method="POST"
                    onSubmit={submitHandler}
                    acceptCharset="utf-8"
                  >
                    <input
                      name="userName"
                      value={loginData.userName}
                      onChange={handleLogin}
                      type="text"
                      placeholder="User Name"
                      required
                    />
                    <input
                      name="password"
                      value={loginData.passowrd}
                      onChange={handleLogin}
                      type="password"
                      placeholder="Password"
                      required
                    />

                    <button
                      name="submit"
                      type="submit"
                      className="sc-button style letter style-2"
                    >
                      <span>Sign In</span>
                    </button>
                  </form>
                  <p style={{ padding: "10px", font: "20px" }}>
                    <Link to="/register"> Sign-up </Link>and discover great
                    amount of new opportunities!
                  </p>
                </div>
                <div className="form-background">
                  <img src={img1} alt="Bidzen" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  
  </>
    
  );
};

export default Login;
