import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import axios from "axios";

const Messege = ({ messege, currentUser, own, sellerPic }) => {
  const [text, setText] = useState("");
  const [message, setMessege] = useState([]);
  const [buyer, setBuyer] = useState({});
  const [seller, setSeller] = useState({});
  // const sendMessege = (e) => {
  //   e.preventDefault();
  //   setMessege([...message, text]);
  //   setText("");
  // };

  // getting current user or buyer information

  // const getBuyerDetails = async () => {
  //   try {
  //     const res = await axios.get("http://localhost:4000/api/user/islogin", {
  //       withCredentials: true,
  //     });
  //     console.log(res);
  //     if (res.status === 200) {
  //       setBuyer(res.data.user);
  //     }
  //   } catch (err) {}
  // };

  // getting current seller information

  // const getSellerDetails = async () => {
  //   try {
  //     const res = await axios.post(
  //       "http://localhost:4000/api/user/islogin",
  //       { id },
  //       {
  //         withCredentials: true,
  //       }
  //     );
  //     console.log(res);
  //     if (res.status === 200) {
  //       setSeller(res.data.user);
  //       setSellerName(res.data.user.firstName);
  //       setSellerPic(res.data.user.profileimage);
  //     }
  //   } catch (err) {}
  // };

  useEffect(() => {
    // getSellerDetails();
    // getBuyerDetails();
  }, []);

  // const sendMessage = async (e) => {
  //   e.preventDefault();
  //   if (text !== "") {
  //     const messageData = {
  //       to: roomID,
  //       author: userName,
  //       message: text,
  //       time:
  //         new Date(Date.now()).getHours() +
  //         ":" +
  //         new Date(Date.now()).getMinutes(),
  //     };
  //     await socket.emit("send_message", messageData);
  //     setMessege((oldList) => [...oldList, messageData]);
  //     setText("");
  //   }
  // };

  //   useEffect(() => {
  //     socket.on("recive_message", (data) => {
  //       setMessageList((oldList) => [...oldList, data]);
  //     });
  //   }, [socket]);

  return (
    <li className="clearfix">
      <div className="message-data text-right">
        <img
          src={own ? currentUser.profileimage : sellerPic}
          className={own ? "float-right" : " float-left"}
          alt="avatar"
          style={{ width: "25px", borderRadius: "50%" }}
        />
      </div>
      <div
        className={
          own
            ? "message other-message float-right"
            : "message other-message float-left"
        }
        style={{ position: "unset" }}
      >
        {messege.text}
      </div>
      <span
        className={own ? "message-data-time float-right" : "message-data-time"}
      >
        <Moment fromNow>{messege.createdAt}</Moment>
      </span>
    </li>
  );
};

export default Messege;
