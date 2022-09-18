import React, { useState } from "react";
import { useParams } from "react-router-dom";

import ScrollToBottom from "react-scroll-to-bottom";
import Header from "../components/header/Header";

const Chat = () => {
  const { id } = useParams();
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
                    <li className="clearfix">
                      <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="avatar" />
                      <div className="about">
                        <div className="name">Vincent Porter</div>
                        <div className="status"> <i className="fa fa-circle offline" /> left 7 mins ago </div>
                      </div>
                    </li>
                    <li className="clearfix active">
                      <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar" />
                      <div className="about">
                        <div className="name">Aiden Chavez</div>
                        <div className="status"> <i className="fa fa-circle online" /> online </div>
                      </div>
                    </li>
                    <li className="clearfix">
                      <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar" />
                      <div className="about">
                        <div className="name">Mike Thomas</div>
                        <div className="status"> <i className="fa fa-circle online" /> online </div>
                      </div>
                    </li>
                    <li className="clearfix">
                      <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />
                      <div className="about">
                        <div className="name">Christian Kelly</div>
                        <div className="status"> <i className="fa fa-circle offline" /> left 10 hours ago </div>
                      </div>
                    </li>
                    <li className="clearfix">
                      <img src="https://bootdey.com/img/Content/avatar/avatar8.png" alt="avatar" />
                      <div className="about">
                        <div className="name">Monica Ward</div>
                        <div className="status"> <i className="fa fa-circle online" /> online </div>
                      </div>
                    </li>
                    <li className="clearfix">
                      <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar" />
                      <div className="about">
                        <div className="name">Dean Henry</div>
                        <div className="status"> <i className="fa fa-circle offline" /> offline since Oct 28 </div>
                      </div>
                    </li>
                    <li className="clearfix">
                      <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar" />
                      <div className="about">
                        <div className="name">Dean Henry</div>
                        <div className="status"> <i className="fa fa-circle offline" /> offline since Oct 28 </div>
                      </div>
                    </li>
                    <li className="clearfix">
                      <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar" />
                      <div className="about">
                        <div className="name">Dean Henry</div>
                        <div className="status"> <i className="fa fa-circle offline" /> offline since Oct 28 </div>
                      </div>
                    </li>
                    <li className="clearfix">
                      <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar" />
                      <div className="about">
                        <div className="name">Dean Henry</div>
                        <div className="status"> <i className="fa fa-circle offline" /> offline since Oct 28 </div>
                      </div>
                    </li>
                    <li className="clearfix">
                      <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar" />
                      <div className="about">
                        <div className="name">Dean Henry</div>
                        <div className="status"> <i className="fa fa-circle offline" /> offline since Oct 28 </div>
                      </div>
                    </li>
                    <li className="clearfix">
                      <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar" />
                      <div className="about">
                        <div className="name">Dean Henry</div>
                        <div className="status"> <i className="fa fa-circle offline" /> offline since Oct 28 </div>
                      </div>
                    </li>
                    <li className="clearfix">
                      <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar" />
                      <div className="about">
                        <div className="name">Dean Henry</div>
                        <div className="status"> <i className="fa fa-circle offline" /> offline since Oct 28 </div>
                      </div>
                    </li>
                    <li className="clearfix">
                      <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar" />
                      <div className="about">
                        <div className="name">Dean Henry</div>
                        <div className="status"> <i className="fa fa-circle offline" /> offline since Oct 28 </div>
                      </div>
                    </li>

                  </ul>
                </div>
                <div className="chat">
                  <div className="chat-header clearfix">
                    <div className="row">
                      <div className="col-lg-6" style={{display: "flex", alignItems: "center"}}>
                        <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
                          <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar" />
                        </a>
                        <div className="chat-about">
                          <h6 className="m-b-0">Aiden Chavez</h6>
                          <small>Last seen: 2 hours ago</small>
                        </div>
                      </div>
                      <div className="col-lg-6 hidden-sm text-right" style={{ display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
                        <a href="javascript:void(0);" className="btn btn-outline-secondary" style={{margin:"5px", borderRadius: "8px"}}><i className="fa fa-camera" style={{fontSize:"18px"}} /></a>
                        <a href="javascript:void(0);" className="btn btn-outline-primary" style={{margin:"5px", borderRadius: "8px"}}><i className="fa fa-image" style={{fontSize:"18px"}} /></a>
                        <a href="javascript:void(0);" className="btn btn-outline-info" style={{margin:"5px", borderRadius: "8px"}}><i className="fa fa-cogs" style={{fontSize:"18px"}}/></a>
                        <a href="javascript:void(0);" className="btn btn-outline-warning" style={{margin:"5px",borderRadius: "8px"}}><i className="fa fa-question" style={{fontSize:"18px"}} /></a>
                      </div>
                    </div>
                  </div>
                  <div className="chat-history">
                    <ul className="m-b-0">
                      <li className="clearfix">
                        <div className="message-data text-right">
                          <span className="message-data-time">10:10 AM, Today</span>
                          <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />
                        </div>
                        <div className="message other-message float-right"> Hi Aiden, how are you? How is the project coming along? </div>
                      </li>
                      <li className="clearfix">
                        <div className="message-data">
                          <span className="message-data-time">10:12 AM, Today</span>
                        </div>
                        <div className="message my-message">Are we meeting today?</div>
                      </li>
                      <li className="clearfix">
                        <div className="message-data">
                          <span className="message-data-time">10:15 AM, Today</span>
                        </div>
                        <div className="message my-message">Project has been already finished and I have results to show you.</div>
                      </li>
                      <li className="clearfix">
                        <div className="message-data text-right">
                          <span className="message-data-time">10:10 AM, Today</span>
                          <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />
                        </div>
                        <div className="message other-message float-right"> Hi Aiden, how are you? How is the project coming along? </div>
                      </li>
                      <li className="clearfix">
                        <div className="message-data text-right">
                          <span className="message-data-time">10:10 AM, Today</span>
                          <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />
                        </div>
                        <div className="message other-message float-right"> Hi Aiden, how are you? How is the project coming along? </div>
                      </li>
                      <li className="clearfix">
                        <div className="message-data text-right">
                          <span className="message-data-time">10:10 AM, Today</span>
                          <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />
                        </div>
                        <div className="message other-message float-right"> Hi Aiden, how are you? How is the project coming along? </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="chat-message clearfix">
                  <form
                  className="form-search"
                  style={{
                    width: "auto",
                    display: "flex",
                  }}
                >
                  <input type="text" placeholder="Search here" style={{marginRight: "10px", border: "1px solid rgb(192 191 197)", borderRadius: "30px"}}/>
                  <button style={{ marginRight: "10px", fontSize:"20px" }}>
                    <i class="fa-regular fa-paper-plane"></i>
                  </button>
                  <button style={{backgroundColor: "#dc39fc00", fontSize: "20px"}}>
                    <i class="fa-regular fa-paper-plane" ></i>
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
