import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import axios from "axios";

const Messege = ({ messege, currentUser, own, sellerPic }) => {
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
