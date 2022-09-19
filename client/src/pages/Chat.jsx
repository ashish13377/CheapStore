import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import ScrollToBottom from "react-scroll-to-bottom";
import Header from "../components/header/Header";

const Chat = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [buyer, setBuyer] = useState({});
  const [seller, setSeller] = useState({});
  const [rooms, setRooms] = useState([]);
  const [text, setText] = useState("");
  const [message, setMessege] = useState([]);
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
        .then((res) => navigate("/"))
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    getRootUser();
  }, []);

  // getting current user or buyer information

  const getBuyerDetails = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/user/islogin", {
        withCredentials: true,
      });
      console.log(res);
      if (res.status === 200) {
        setBuyer(res.data.user);
      }
    } catch (err) {}
  };

  // getting current seller information

  const getSellerDetails = async () => {
    try {
      const res = await axios.post(
        "http://localhost:4000/api/user/islogin",
        { id },
        {
          withCredentials: true,
        }
      );
      console.log(res);
      if (res.status === 200) {
        setSeller(res.data.user);
      }
    } catch (err) {}
  };

  // Creating room

  const createRoom = async () => {
    try {
      const res = await axios.post(
        "http://localhost:4000/api/create/room",
        { id },
        {
          withCredentials: true,
        }
      );
      if (res.status === 200) {
      }
    } catch (err) {}
  };

  // Creating room

  const getRooms = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/get/rooms", {
        withCredentials: true,
      });
      if (res.status === 200) {
        setRooms(res.data.rooms);
      }
    } catch (err) {}
  };
  const sendMessege = (e) => {
    e.preventDefault();
    setMessege([...message, text]);
    setText("");
  };

  useEffect(() => {
    createRoom();

    getBuyerDetails();
  }, []);
  useEffect(() => {
    getSellerDetails();
  }, []);
  useEffect(() => {
    getRooms();
  });
  useEffect(() => {}, []);

  return (
    <div>
      <Header />
      <section className="item-details-page" style={{ marginTop: "3%" }}>
        <div className="container">
          <div className="row clearfix">
            <div className="col-lg-12">
              <div className="card chat-app">
                <div className="people-header">
                  <h4>Inbox</h4>
                </div>
                <div id="plist" className="people-list">
                  <ul className="list-unstyled chat-list mt-2 mb-0">
                    {rooms.map((room, index) => {
                      return (
                        <li className="clearfix" key={index}>
                          <img src={room.roomPic} alt="avatar" />
                          <div className="about">
                            <div className="name">{room.roomName}</div>
                            <div className="status">
                              {" "}
                              <i className="fa fa-circle online" /> online{" "}
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="chat">
                  <div className="chat-header clearfix">
                    <div className="row">
                      <div
                        className="col-lg-6"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <a
                          href="javascript:void(0);"
                          data-toggle="modal"
                          data-target="#view_info"
                        >
                          <img
                            src="https://bootdey.com/img/Content/avatar/avatar2.png"
                            alt="avatar"
                          />
                        </a>
                        <div className="chat-about">
                          <h6 className="m-b-0">Aiden Chavez</h6>
                          <small>Last seen: 2 hours ago</small>
                        </div>
                      </div>
                      <div
                        className="col-lg-6 hidden-sm text-right"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-end",
                        }}
                      >
                        <a
                          href="javascript:void(0);"
                          className="btn btn-outline-secondary"
                          style={{ margin: "5px", borderRadius: "8px" }}
                        >
                          <i
                            className="fa fa-camera"
                            style={{ fontSize: "18px" }}
                          />
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="btn btn-outline-primary"
                          style={{ margin: "5px", borderRadius: "8px" }}
                        >
                          <i
                            className="fa fa-image"
                            style={{ fontSize: "18px" }}
                          />
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="btn btn-outline-info"
                          style={{ margin: "5px", borderRadius: "8px" }}
                        >
                          <i
                            className="fa fa-cogs"
                            style={{ fontSize: "18px" }}
                          />
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="btn btn-outline-warning"
                          style={{ margin: "5px", borderRadius: "8px" }}
                        >
                          <i
                            className="fa fa-question"
                            style={{ fontSize: "18px" }}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="chat-history">
                    <ul className="m-b-0">
                      {message.map((msg) => {
                        return (
                          <li className="clearfix">
                            <div className="message-data text-right">
                              <span className="message-data-time">
                                10:10 AM, Today
                              </span>
                              <img src={buyer.profileimage} alt="avatar" />
                            </div>
                            <div className="message other-message float-right">
                              {" "}
                              {msg}{" "}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <div className="chat-message clearfix">
                    <form
                      className="form-search"
                      style={{
                        width: "auto",
                        display: "flex",
                      }}
                      onSubmit={sendMessege}
                    >
                      <input
                        type="text"
                        placeholder="Search here"
                        style={{
                          marginRight: "10px",
                          border: "1px solid rgb(192 191 197)",
                          borderRadius: "30px",
                        }}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                      />
                      <button
                        type="submit"
                        style={{ marginRight: "10px", fontSize: "20px" }}
                      >
                        <i class="fa-regular fa-paper-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Chat;
