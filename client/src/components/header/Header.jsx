import React, { useRef, useState, useEffect } from "react";
import "./Header.css";
import Avatar from "react-avatar";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo/logo_dark.png";
import logo2x from "../../assets/images/logo/logo_dark@2x.png";
import logolight from "../../assets/images/logo/logo.png";
import logolight2x from "../../assets/images/logo/logo@2x.png";
import DarkMode from "./DarkMode";
import { serverAPI } from "../../App";
import icon from "../../assets/images/icon/connect-wallet.svg";
import axios from "axios";

const Header = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [notification, setNotifiactions] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [searchCollegeText, setSearchCollegeText] = useState("");
  const [colleges, setColleges] = useState([]);
  const [userData, setUserData] = useState({});
  const headerRef = useRef(null);

  const [products, setProducts] = useState([]);

  const [filterProducts, setFilterProducts] = useState([]);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    const newFilter = products.filter((val) => {
      return val.toLowerCase().includes(e.target.value.toLowerCase());
    });
    if (e.target.value === "") {
      setFilterProducts([]);
    } else {
      setFilterProducts(newFilter);
    }
  };

  // Getting Notification

  const getNotifications = async () => {
    try {
      const res = await axios.get(
        `${serverAPI}/get/notification`,
        {
          withCredentials: true,
        }
      );
      setNotifiactions(res.data.length);
    } catch (err) {
      console.log(err);
    }
  };

  // Getting all products

  const getAllProducts = async () => {
    try {
      const res = await axios.get(
        `${serverAPI}/get/products/name`,
        {
          withCredentials: true,
        }
      );
      if (res.status === 200) {
        setProducts(res.data.productsName);
      }
    } catch (err) {
      alert(err);
    }
  };

  const getAllColleges = async () => {
    try {
      const res = await axios.get(`${serverAPI}/get/colleges`, {
        withCredentials: true,
      });
      if (res.status === 200) {
        setColleges(res.data.newArray);
      }
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  useEffect(() => {
    getNotifications();
  }, []);

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
  // Search function

  const getAllProductsByFilter = async (e) => {
    e.preventDefault();
    navigate(`/search/${searchText}`);
    setFilterProducts([]);
    setSearchText("");
  };
  const getAllProductsByFilterCollege = async (e) => {
    e.preventDefault();
    navigate(`/search/${searchCollegeText}`);
    setSearchCollegeText("");
  };

  // Getting root user data

  const getRootUser = async () => {
    try {
      const res = await axios.get(`${serverAPI}/user/islogin`, {
        withCredentials: true,
      });

      if (res.status === 200) {
        setIsLogin(true);
        setUserData(res.data.user);
      }
    } catch (err) { }
  };
  const logout = async () => {
    try {
      const res = await axios.get(`${serverAPI}/logout`, {
        withCredentials: true,
      });
      console.log(res);
      if (res.status === 200) {
        Swal.fire({
          title: res.data.msg,
          icon: "success",
          confirmButtonText: "OK",
        })
          .then((res) => navigate("/"))
          .catch((err) => { });
        setIsLogin(false);
      }
    } catch (err) { }
  };

  useEffect(() => {
    getRootUser();
    getAllColleges();
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
              <div id="site-header-inner" className="flex px-0">
                <div id="site-logo" className="clearfix">
                  <div id="site-logo-inner">
                    <Link
                      to="/"
                      rel="home"
                      className="main-logo"
                      onClick={(e) => setNotifiactions(null)}
                    >
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

                <form
                  className="form-search res-hide"
                  style={{
                    width: "200px",
                    textAlign: "center",
                    display: "flex",
                    margin: "0",
                    alignItems: "center",
                  }}
                  onSubmit={getAllProductsByFilterCollege}
                >
                  <input
                    list="ice-cream-flavors"
                    placeholder="College Name"
                    value={searchCollegeText}
                    onChange={(e) => setSearchCollegeText(e.target.value)}
                    name="ice-cream-choice"
                    style={{
                      width: "200px",
                      padding: "16px",
                      textAlign: "center",
                      margin: "3px 0 0 0",
                      display: "flex",
                      alignItems: "center",
                    }}
                  />

                  <datalist id="ice-cream-flavors">
                    {colleges.map((clg, index) => {
                      return (
                        <option
                          value={clg}
                          key={index}
                          onClick={(e) => {
                            setSearchCollegeText(clg);
                          }}
                        />
                      );
                    })}
                  </datalist>
                </form>
                <form
                  className="form-search"
                  style={{
                    width: "660px",
                    marginLeft: "20px",
                    marginTop: "3px",
                  }}
                  onSubmit={getAllProductsByFilter}
                >
                  <input
                    type="text"
                    placeholder="Search here"
                    value={searchText}
                    onChange={handleSearch}
                  />
                  <button type="submit" onClick={getAllProductsByFilter}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </form>
                {filterProducts.length !== 0 && (
                  <div
                    style={{
                      width: "300px",
                      height: "auto",
                      backgroundColor: "#ffff",
                      position: "absolute",
                      left: "400px",
                      top: "70px",
                      borderRadius: "10px",
                    }}
                  >
                    <ul>
                      {filterProducts?.map((fl, index) => {
                        return (
                          <li
                            style={{
                              color: "#000",
                              margin: "30px",
                              fontWeight: "bold",
                              cursor: "pointer",
                            }}
                            key={index}
                            onClick={(e) => setSearchText(fl)}
                          >
                            {fl}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}

                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    width: "25%",
                  }}
                >
                  <div
                    style={{ fontSize: "30px", margin: "0 30px" }}
                    onClick={(e) => setNotifiactions(null)}
                  >
                    <Link to="/notification">
                      {notification ? (
                        <span
                          className={!notification && "d-none"}
                          style={{
                            position: "absolute",
                            top: "1px",
                            fontSize: "27px",
                            backgroundColor: "red",
                            padding: "4px",
                            textAlign: "center",
                            borderRadius: "50%",
                            width: "33px",
                          }}
                        >
                          {notification && notification}
                        </span>
                      ) : null}
                      <i className="fa-sharp fa-solid fa-bell"></i>
                    </Link>
                  </div>
                  <div className="button-connect-wallet res-hide">
                    <Link to="/post" className="sc-button wallet style-2">
                      <img src={icon} alt="icon" />
                      <span>Sell</span>
                    </Link>
                  </div>
                  <div
                    style={{ fontSize: "30px", margin: "0 20px" }}
                    className={!isLogin ? "d-none" : "d-block"}
                  >
                    <Link to="/profile">
                      <Avatar
                        name={userData.firstName}
                        size="40"
                        round={true}
                        src={userData.profileimage}
                      />
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
                </div>

                <DarkMode />
                <div
                  style={{
                    fontSize: "26px",
                    marginRight: "0",
                    marginLeft: "30px",
                    textAlign: "right",
                    cursor: "pointer",
                  }}
                  className={!isLogin ? "d-none" : "d-block"}
                >
                  <span onClick={logout}>
                    <i className="fa-solid fa-right-from-bracket"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
