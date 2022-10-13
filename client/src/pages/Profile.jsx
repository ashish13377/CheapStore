import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/header/Header";
import "react-tabs/style/react-tabs.css";
import { serverAPI } from "../App";
import Newsletters from "../components/layouts/Newsletters";
import Footer from "../components/footer/Footer";
import img1 from "../assets/image1.png";
import { Helmet } from "react-helmet";

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

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
    } catch (err) {
      setIsLogin(false);
      Swal.fire({
        title: "Please Log in",
        icon: "warning",
        confirmButtonText: "OK",
      })
        .then((res) => navigate("/login"))
        .catch((err) => console.log(err));
    }
  };

  // Getting root user data

  const getProducts = async () => {
    try {
      const res = await axios.get(`${serverAPI}/products`, {
        withCredentials: true,
      });

      if (res.status === 200) {
        setProducts(res.data.products);
      }
    } catch (err) { }
  };

  const deleteProduct = async (id) => {
    try {
      const res = await axios.post(
        `${serverAPI}/delete/product`,
        { id },
        {
          withCredentials: true,
        }
      );
      if (res.status === 200) {
        const data = res.data;
        getProducts();
        Swal.fire({
          title: data.msg,
          icon: "Success",
          confirmButtonText: "OK",
        });
      }
    } catch (err) { }
  };

  useEffect(() => {
    getRootUser();
  }, []);
  useEffect(() => {
    getProducts();
  });
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>CheapStore | Profile </title>
      </Helmet>
      <div className="item-details">
        <Header />
        {isLogin ? (
          <>
            {" "}
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
                          <li>
                            <Link to="/">Home</Link>
                          </li>
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
                  <div className="col-xl-4 col-lg-12 col-md-12">
                    <div
                      className="profile-pic"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={userData.profileimage}
                        alt="profile image"
                        style={{ borderRadius: "20px", width: "50%" }}
                      />
                      <Link to="/editprofile/pic">
                        <button
                          name="submit"
                          type="submit"
                          style={{ backgroundColor: "#dc39fc00", margin: "10px" }}
                        >
                          <span>Edit</span>{" "}
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-8 col-lg-12 col-md-12">
                    <div style={{ display: "flex", paddingBottom: "10px" }}>
                      <h2 style={{ marginRight: "20px" }}>
                        {userData.firstName + " " + userData.lastName}
                      </h2>
                      <Link to="/editprofile/info">
                        <button
                          name="submit"
                          type="submit"
                          style={{ backgroundColor: "#dc39fc00" }}
                        >
                          <span>Edit</span>{" "}
                        </button>
                      </Link>
                    </div>

                    <p style={{ fontSize: " 17px" }}>
                      {" "}
                      Style is a reflection of your attitude and your personality.
                    </p>
                    <hr></hr>
                    {/* <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <br></br>
                    <br></br>
                    <img src={img1} alt="Sell New" />
                    <p
                      style={{
                        fontSize: "20px",
                        fontweight: "bold",
                        padding: "10px",
                      }}
                    >
                      {" "}
                      There are no Ads{" "}
                    </p>
                    <p style={{ fontSize: "15px" }}>
                      When users post ads, will appear here. If you want to post
                      something you can do it now
                    </p>
                    <br></br>
                    <button
                      name="submit"
                      type="submit"
                      style={{ backgroundColor: "#dc39fc00" }}
                    >
                      <span>Start Selling</span>
                    </button>
                  </div> */}

                    {products.map((prd) => {
                      return (
                        <div className="Addbox">
                          <div className="row">
                            <div className="col-sm-3 Addbox1">
                              <p> From: Feb 20, 20</p>
                            </div>
                            <div className="col-sm-6 Addbox2">
                              <h6> Product: {prd.itemName}</h6>
                              <h6> Price: Rs: {prd.itemPrice}/- </h6>
                            </div>
                            <div className="col-sm-3 Addbox3">
                              <button
                                name="submit"
                                type="submit"
                                style={{ backgroundColor: "#dc39fc00" }}
                                onClick={(e) => deleteProduct(prd._id)}
                              >
                                <span>Delete</span>{" "}
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
            <Newsletters />
            <Footer />
          </>
        ) : null}
      </div>

    </>

  );
};

export default Profile;
