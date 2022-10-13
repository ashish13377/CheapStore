import axios from "axios";
import React, { useEffect, useState } from "react";
import { serverAPI } from "../App";
const Chats = ({ chat, currentUser, setSellerName, setSellerPic }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const friendId = chat.members.find((m) => m !== currentUser._id);

    const getUser = async () => {
      const res = await axios.get(`${serverAPI}/user/` + friendId);
      setUser(res.data);
    };
    getUser();
  }, [currentUser, chat]);

  return (
    <li className="clearfix">
      <img src={user?.profileimage} alt="avatar" />
      <div className="about">
        <div className="name">{user.firstName}</div>
        <div className="status">
          <i className="fa fa-circle online" /> online{" "}
        </div>
      </div>
    </li>
  );
};

export default Chats;
