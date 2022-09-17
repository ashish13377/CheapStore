import React, { useRef, useState, useEffect } from "react";
import "./Header.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo_dark.png";
import logo2x from "../../assets/images/logo/logo_dark@2x.png";
import logolight from "../../assets/images/logo/logo.png";
import logolight2x from "../../assets/images/logo/logo@2x.png";
import DarkMode from "./DarkMode";

import icon from "../../assets/images/icon/connect-wallet.svg";
import axios from "axios";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState({});
  const headerRef = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });
  const isSticky = (e) => {
    const header = document.querySelector(".js-header");
    const scrollTop = window.scrollY;

    scrollTop >= 100
      ? header.classList.add("is-fixed")
      : header.classList.remove("is-fixed");
    scrollTop >= 120
      ? header.classList.add("is-small")
      : header.classList.remove("is-small");
  };

  // Getting root user data

  const getRootUser = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/user/islogin", {
        withCredentials: true,
      });
      console.log(res);
      if (res.status === 200) {
        setIsLogin(true);
        setUserData(res.data.user);
      }
    } catch (err) {}
  };
  const logout = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/user/logout", {
        withCredentials: true,
      });
      console.log(res);
      if (res.status === 200) {
        Swal.fire({
          title: res.data.msg,
          icon: "success",
          confirmButtonText: "OK",
        });
        setIsLogin(false);
      }
    } catch (err) {}
  };

  useEffect(() => {
    getRootUser();
  }, []);
  return (
    <div>
      <header
        id="header_main"
        className="header_1 js-header p-0 res-header"
        ref={headerRef}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div id="site-header-inner" className="flex">
                <div id="site-logo" className="clearfix">
                  <div id="site-logo-inner">
                    <Link to="/" rel="home" className="main-logo">
                      <img
                        id="logo_header"
                        className="logo-dark"
                        src={logo}
                        srcSet={logo2x}
                        alt="nft-gaming"
                      />
                      <img
                        id="logo_header"
                        className="logo-light"
                        src={logolight}
                        srcSet={logolight2x}
                        alt="nft-gaming"
                      />
                    </Link>
                  </div>
                </div>

                <form className="form-search">
                  <input
                    list="ice-cream-flavors"
                    placeholder="College Name"
                    name="ice-cream-choice"
                    style={{
                      width: "300px",
                      paddingBottom: "20px",
                      marginTop: "1px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  />

                  <datalist id="ice-cream-flavors">
                    <option value="Chocolate" />
                    <option value="Coconut" />
                  </datalist>
                </form>
                <form className="form-search">
                  <input type="text" placeholder="Search here" />
                  <button>
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </button>
                </form>

                {/* <nav id="main-nav" className="main-nav" ref={menuLeft}>
                                <ul id="menu-primary-menu" className="menu">
                                    {
                                        menus.map((data,index) => (
                                            <li key={index} onClick={()=> handleOnClick(index)} className={`menu-item menu-item-has-children ${activeIndex === index ? 'active' : ''} ` }   >
                                                <Link to="#">{data.name}</Link>
                                                <ul className="sub-menu" >
                                                    {
                                                        data.namesub.map((submenu,index) => (
                                                            <li key={index} className={
                                                                pathname === submenu.links
                                                                    ? "menu-item current-item"
                                                                    : "menu-item"
                                                                }><Link to={submenu.links}>{submenu.sub}</Link></li>
                                                        ))
                                                    }
                                                </ul>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </nav> */}

                <div style={{ fontSize: "30px", margin: "0 10px" }}>
                  <Link to="/connect-wallet">
                    <i class="fa-sharp fa-solid fa-comment"></i>
                  </Link>
                </div>
                <div
                  style={{ fontSize: "30px", margin: "0 20px" }}
                  className={!isLogin ? "d-none" : "d-block"}
                >
                  <Link to="/profile">
                    <i class="fa-solid fa-user-graduate"></i>
                  </Link>
                </div>
                <div
                  style={{ fontSize: "16px", margin: "0 20px" }}
                  className={isLogin ? "d-none" : "d-block"}
                >
                  <Link to="/login">
                    <span>Login</span>
                  </Link>
                </div>
                <div
                  style={{ fontSize: "16px", margin: "0 20px" }}
                  className={isLogin ? "d-none" : "d-block"}
                >
                  <Link to="/register">
                    <span onClick={() => setIsLogin(!isLogin)}>Register</span>
                  </Link>
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    margin: "0 20px",
                    cursor: "pointer",
                  }}
                  className={!isLogin ? "d-none" : "d-block"}
                >
                  <span onClick={logout}>Logout</span>
                </div>
                <div className="button-connect-wallet res-hide">
                  <Link
                    to="/connect-wallet"
                    className="sc-button wallet style-2"
                  >
                    <img src={icon} alt="icon" />
                    <span>Sell</span>
                  </Link>
                </div>

                <DarkMode />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
