import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/header/Header";

const Notification = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  // Getting root user data

  const getRootUser = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/user/islogin", {
        withCredentials: true,
      });
      console.log(res);
      if (res.status === 200) {
        setIsLogin(true);
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

  useEffect(() => {
    getRootUser();
  }, []);
  return (
    <>
      <Header />
      {isLogin ? (
        <>
          <div class="container d-flex flex-column align-items-center justify-content-center">
            <Link to="/chat/1234">
              <div class="card-notification mt-5 p-3 ">
                <div class="media">
                  <img src="https://imgur.com/3UmlFEf.png" class="mr-3" />
                  <div class="media-body">
                    <h6 class="mt-2 mb-0">You have received 1 message</h6>
                    <small class="text">Mar 20,2020</small>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/chat/1235">
              <div class="card-notification mt-5 p-3 ">
                <div class="media">
                  <img src="https://imgur.com/3UmlFEf.png" class="mr-3" />
                  <div class="media-body">
                    <h6 class="mt-2 mb-0">You have received 1 message</h6>
                    <small class="text">Mar 20,2020</small>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/chat/1236">
              <div class="card-notification mt-5 p-3 ">
                <div class="media">
                  <img src="https://imgur.com/3UmlFEf.png" class="mr-3" />
                  <div class="media-body">
                    <h6 class="mt-2 mb-0">You have received 1 message</h6>
                    <small class="text">Mar 20,2020</small>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Notification;
