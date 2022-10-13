import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/header/Header";
import { serverAPI } from "../App";
const Notification = () => {
  const navigate = useNavigate();
  const [notifications, setNotifiactions] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [fromUser, setFromUser] = useState({});
  // Getting root user data

  const getRootUser = async () => {
    try {
      const res = await axios.get(`${serverAPI}/user/islogin`, {
        withCredentials: true,
      });

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
        .then((res) => navigate("/"))
        .catch((err) => console.log(err));
    }
  };

  const getNotifications = async () => {
    try {
      const res = await axios.get(
        `${serverAPI}/get/notification`,
        {
          withCredentials: true,
        }
      );
      setNotifiactions(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getNotifications();
    getRootUser();
  }, []);
  return (
    <>
      <Header />
      {isLogin ? (
        <>
          <div className="container d-flex flex-column align-items-center justify-content-center">
            {notifications.map((n) => {
              return (
                <Link to={`/chat/${n.from}`}>
                  <div className="card-notification mt-5 p-3 ">
                    <div className="media">
                      <img
                        src={n.fromPic}
                        className="mr-3"
                        style={{ width: "70px" }}
                      />
                      <div className="media-body">
                        <h6 className="mt-2 mb-0">
                          You have received 1 message from {n.fromName}
                        </h6>
                        <small className="text">{n.createdAt}</small>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </>
      ) : null}
    </>
  );
};

export default Notification;
