import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";

const Notification = () => {
  return (
    <>
      <Header />
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
  );
};

export default Notification;
