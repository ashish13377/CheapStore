import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Loader from "../components/Loader/Loader";
import "react-tabs/style/react-tabs.css";
import { serverAPI } from "../App";
import Newsletters from "../components/layouts/Newsletters";
import Footer from "../components/footer/Footer";
const Pic = () => {
  const [userData, setUserData] = useState({});
  const [imageurl, setImageurl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Getting root user data

  const getRootUser = async () => {
    try {
      const res = await axios.get(`${serverAPI}/user/islogin`, {
        withCredentials: true,
      });
      console.log(res);
      if (res.status === 200) {
        setUserData(res.data.user);
      }
    } catch (err) { }
  };

  // Hendla file

  const handleFile = async (e) => {
    const data = new FormData();
    data.append("file", e.target.files[0]);
    data.append("upload_preset", "chipstore");
    data.append("cloud_name", "basustudent");
    try {
      setIsLoading(true);
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/basustudent/image/upload",
        data
      );
      const dat = res.data;
      setImageurl(dat.secure_url);
      setIsLoading(false);
    } catch (err) {
      console.log(err)
      setIsLoading(false);
    }
  };
  const updateProfilePic = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${serverAPI}/user/update/profilepic`,
        { imageurl: imageurl },
        {
          withCredentials: true,
        }
      );
      console.log(res);
      if (res.status === 200) {
        Swal.fire({
          title: res.data.msg,
          icon: "success",
          confirmButtonText: "OK",
        });
      }
    } catch (err) {
      Swal.fire({
        title: err.response.data.msg,
        icon: "success",
        confirmButtonText: "OK",
      });
    }
  };
  useEffect(() => {
    getRootUser();
  }, []);

  return (
    <div className="item-details">
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <section className="fl-page-title">
            <div className="overlay"></div>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="page-title-inner flex">
                    <div className="page-title-heading">
                      <h2 className="heading">Profile Picture</h2>
                    </div>
                    <div className="breadcrumbs">
                      <ul>
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>Profile Picture</li>
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
                <div className="col-xl-3 col-lg-12 col-md-12">
                  <div className="">
                    <div style={{ marginTop: "20px" }}>
                      <h4 style={{ margin: "10px" }}>
                        {" "}
                        <Link to="/editprofile/info"> Edit Profile</Link>
                      </h4>
                      <h4 style={{ margin: "10px" }}>
                        {" "}
                        <Link to="/editprofile/pic"> Profile Picture</Link>
                      </h4>
                      <Link
                        to="/profile"
                        className="sc-button style letter style-2 style-item-details"
                        style={{ margin: "10px" }}
                      >
                        <span>View Profile</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-9 col-lg-12 col-md-12"
                  style={{ border: "1px solid", padding: "30px" }}
                >
                  <div className="">
                    <h3> Profile picture</h3>
                    <hr></hr>
                    <div className="row">
                      <div className="col-4">
                        <div className="profile-pic">
                          <img
                            src={!imageurl ? userData.profileimage : imageurl}
                          />
                        </div>
                      </div>
                      <div className="col-8">
                        <p style={{ fontSize: "15px" }}>
                          Clear photos are an important way for buyers and
                          sellers to learn about each other. Be sure doesn’t
                          include any personal or sensitive info you’d rather
                          not have others see.
                        </p>
                        <br></br>
                        <br></br>
                        <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                          It’s not much fun to chat with a landscape!
                        </p>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <form
                          id="create-item-1"
                          method="POST"
                          acceptCharset="utf-8"
                          onSubmit={updateProfilePic}
                        >
                          <label className="uploadFile">
                            <span className="filename">Choose Item</span>
                            <input
                              type="file"
                              className="inputfile form-control"
                              name="file"
                              onChange={handleFile}
                            />
                            <span className="icon">
                              <i className="fa-solid fa-upload"></i>
                            </span>
                          </label>
                          <button
                            name="submit"
                            type="submit"
                            style={{ backgroundColor: "#dc39fc00" }}
                          >
                            <span>Upload</span>{" "}
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Newsletters />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Pic;
