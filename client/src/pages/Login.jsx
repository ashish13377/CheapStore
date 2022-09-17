import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DarkMode from "../components/header/DarkMode";

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
        "http://localhost:4000/api/login/user",
        loginData,
        {
          withCredentials: true,
        }
      );
      if (res.status === 200) {
        const data = res.data;
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
    } catch (err) {
      Swal.fire({
        title: err.response.data.msg,
        icon: "danger",
        confirmButtonText: "OK",
      });
    }
  };
  return (
    <div>
      <section className="tf-section login-page">
        <div className="container">
          <div className="row">
            <DarkMode />
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
  );
};

export default Login;
