import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { chatServer } from "../App";
import Swal from "sweetalert2";
import io from "socket.io-client";
import { serverAPI } from "../App";
import Header from "../components/header/Header";
import Messege from "./Messege";
import Chats from "./Chats";

// const socket = io.connect(`${chatServer}`);

const Chat = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setuser] = useState({});
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messeges, setMesseges] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [sellerPic, setSellerPic] = useState("");
  const [arrivalMessege, setArrivalMessege] = useState(null);
  const [sellerName, setSellerName] = useState("");
  const [freindID, setFreindID] = useState(id);
  const [newMessege, setNewMessege] = useState(null);
  const scrollRef = useRef();
  const socket = io.connect(`${chatServer}`);

  // Creating Chat
  useEffect(() => {
    const createChat = async () => {
      try {
        const res = await axios.post(
          `${serverAPI}/create/chat`,
          { senderID: user._id, reciverID: id },
          {
            withCredentials: true,
          }
        );
        console.log(res);
        if (res.status === 200) {
          setCurrentChat(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    if (user._id === id) {
      Swal.fire({
        title: "You can not chat to yourself",
        icon: "warning",
        confirmButtonText: "OK",
      })
        .then((res) => navigate("/"))
        .catch((err) => console.log(err));
    } else {
      createChat();
    }
  }, [user._id]);

  // Socket connection....

  useEffect(() => {
    socket.on("recive_messege", (data) => {
      setArrivalMessege({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessege &&
      currentChat?.members.includes(arrivalMessege.sender) &&
      setMesseges((prev) => [...prev, arrivalMessege]);
  }, [arrivalMessege, currentChat]);

  // Getting root user data

  const getRootUser = async () => {
    try {
      const res = await axios.get(`${serverAPI}/user/islogin`, {
        withCredentials: true,
      });

      if (res.status === 200) {
        setIsLogin(true);
        setuser(res.data.user);
        if (res.data.user._id === id) {
          Swal.fire({
            title: "You can not chat to yourself",
            icon: "warning",
            confirmButtonText: "OK",
          })
            .then((res) => navigate("/"))
            .catch((err) => console.log(err));
        } else {
          socket.emit("add_user", res.data.user._id);
        }
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

  useEffect(() => {
    const getChats = async () => {
      try {
        const res = await axios.get(
          `${serverAPI}/chat/${user._id}`,
          {
            withCredentials: true,
          }
        );
        if (res.status === 200) {
          setChats(res.data);
        }
      } catch (err) {
        console.log(err);
       
      }
    };
    getChats();
  }, [user._id]);

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get(`${serverAPI}/user/${freindID}`);
      setSellerName(res.data.firstName);
      setSellerPic(res.data.profileimage);
    };
    const getMesseges = async () => {
      try {
        const res = await axios.get(
          `${serverAPI}/messege/` + currentChat._id,
          {
            withCredentials: true,
          }
        );
        console.log(res);
        if (res.status === 200) {
          setMesseges(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    if (currentChat === null) {
    } else {
      getMesseges();
    }
    getUser();
  }, [currentChat]);

  const sendNotification = async () => {
    try {
      const res = await axios.post(
        `${serverAPI}/send/notification`,
        {
          from: user._id,
          fromName: user.firstName,
          fromPic: user.profileimage,
          chatID: currentChat._id,
          to: freindID,
        },
        {
          withCredentials: true,
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  // Creating messege

  const createMessege = async (e) => {
    e.preventDefault();
    const msg = {
      chatID: currentChat._id,
      sender: user._id,
      text: newMessege,
    };
    socket.emit("send_messege", {
      senderId: user._id,
      reciverId: freindID,
      text: newMessege,
    });
    try {
      const res = await axios.post(`${serverAPI}/messege`, msg, {
        withCredentials: true,
      });

      if (res.status === 200) {
        setMesseges([...messeges, res.data]);
        setNewMessege("");
        sendNotification();
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messeges]);

  const setChat = (c) => {
    setCurrentChat(c);
    const frndid = c.members.find((m) => m !== user._id);
    setFreindID(frndid);
  };

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
                    {chats.map((c, index) => {
                      return (
                        <div key={index} onClick={() => setChat(c)}>
                          <Chats chat={c} currentUser={user} />
                        </div>
                      );
                    })}
                  </ul>
                </div>
                {currentChat ? (
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
                            <img src={sellerPic} alt="avatar" />
                          </a>
                          <div className="chat-about">
                            <h6 className="m-b-0">{sellerName}</h6>
                            <small>Last seen: 2 hours ago</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="chat-history">
                      <ul className="m-b-0">
                        {messeges?.map((m) => {
                          return (
                            <div ref={scrollRef}>
                              <Messege
                                messege={m}
                                currentUser={user}
                                own={m.sender == user._id}
                                sellerPic={sellerPic}
                              />
                            </div>
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
                        onSubmit={createMessege}
                      >
                        <input
                          type="text"
                          placeholder="Type here...."
                          style={{
                            marginRight: "10px",
                            border: "1px solid rgb(192 191 197)",
                            borderRadius: "30px",
                          }}
                          value={newMessege}
                          onChange={(e) => setNewMessege(e.target.value)}
                        />
                        <button
                          type="submit"
                          style={{ marginRight: "10px", fontSize: "20px" }}
                        >
                          <i className="fa-regular fa-paper-plane"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                ) : (
                  <span
                    style={{
                      position: "absolute",
                      fontSize: "30px",
                      left: "700px",
                      top: "300px",
                    }}
                  >
                    Please select a chat
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Chat;
