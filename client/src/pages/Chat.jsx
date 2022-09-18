import React, { useState } from "react";
import { useParams } from "react-router-dom";

import ScrollToBottom from "react-scroll-to-bottom";
import Header from "../components/header/Header";

const Chat = () => {
  const { id } = useParams();
  return (
    <div>
      <Header />
      <section>
        <div class="container">
          <div class="row d-flex justify-content-center">
            <div class="col-md-8 col-lg-10 col-xl-12">
              <div class="card w-5" style={{ backgroundColor: "#06060e" }}>
                <div
                  class="card-header d-flex justify-content-between align-items-center"
                  style={{ backgroundColor: "#000" }}
                >
                  <h5 class="mb-0" style={{ backgroundColor: "#000" }}>
                    {id}
                  </h5>
                </div>
                <div
                  class="card-body"
                  data-mdb-perfect-scrollbar="true"
                  style={{
                    position: "relative",
                    height: "400px",
                    marginBottom: "25px",
                    overflow: "hidden",
                    overflowY: "scroll",
                    padding: "20px 0",
                  }}
                >
                  <div class="d-flex justify-content-between">
                    <p class="small mb-1">Timona Siera</p>
                    <p class="small mb-1 text-muted">23 Jan 2:00 pm</p>
                  </div>
                  <div class="d-flex flex-row justify-content-start">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5-bg.webp"
                      alt="avatar 1"
                      style={{ width: "45px", height: "100%" }}
                    />
                    <div>
                      <p
                        class="small p-2 ms-3 mb-3 rounded-3"
                        style={{
                          backgroundColor: "#dc39fc",
                          borderRadius: "10px",
                          fontSize: "20px",
                          fontFamily: "'Montserrat', sans-serif",
                          maxWidth: "500px",
                        }}
                      >
                        For what reason would it be advisable for me to think
                        about business content?
                      </p>
                    </div>
                  </div>

                  <div class="d-flex justify-content-between">
                    <p class="small mb-1 text-muted">23 Jan 2:05 pm</p>
                    <p class="small mb-1">Johny Bullock</p>
                  </div>
                  <div class="d-flex flex-row justify-content-end mb-4 pt-1">
                    <div>
                      <p
                        class="small p-2 me-3 mb-3 text-dark rounded-5"
                        style={{
                          color: "black",
                          backgroundColor: "#ffff",
                          borderRadius: "10px",
                          fontSize: "20px",
                          fontFamily: "'Montserrat', sans-serif",
                          maxWidth: "500px",
                        }}
                      >
                        Thank you for your believe in our supports
                      </p>
                    </div>
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                      alt="avatar 1"
                      style={{ width: "45px", height: "100%" }}
                    />
                  </div>

                  <div class="d-flex justify-content-between">
                    <p class="small mb-1">Timona Siera</p>
                    <p class="small mb-1 text-muted">23 Jan 5:37 pm</p>
                  </div>
                  <div class="d-flex flex-row justify-content-start">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5-bg.webp"
                      alt="avatar 1"
                      style={{ width: "45px", height: "100%" }}
                    />
                    <div>
                      <p
                        class="small p-2 ms-3 mb-3 rounded-3"
                        style={{
                          backgroundColor: "#dc39fc",
                          borderRadius: "10px",
                          maxWidth: "500px",
                          fontSize: "20px",
                          fontFamily: "'Montserrat', sans-serif",
                        }}
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        similique quae consequatur
                      </p>
                    </div>
                  </div>

                  <div class="d-flex justify-content-between">
                    <p class="small mb-1 text-muted">23 Jan 6:10 pm</p>
                    <p class="small mb-1">Johny Bullock</p>
                  </div>
                  <div class="d-flex flex-row justify-content-end mb-4 pt-1">
                    <div>
                      <p
                        class="small p-2 me-3 mb-3 text-dark rounded-5"
                        style={{
                          color: "black",
                          backgroundColor: "#ffff",
                          borderRadius: "10px",
                          maxWidth: "500px",
                          fontSize: "20px",
                          fontFamily: "'Montserrat', sans-serif",
                        }}
                      >
                        Dolorum quasi voluptates quas amet in repellendus
                        perspiciatis fugiat
                      </p>
                    </div>
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                      alt="avatar 1"
                      style={{ width: "45px", height: "100%" }}
                    />
                  </div>
                  <div class="d-flex justify-content-between">
                    <p class="small mb-1 text-muted">23 Jan 6:10 pm</p>
                    <p class="small mb-1">Johny Bullock</p>
                  </div>
                  <div class="d-flex flex-row justify-content-end mb-4 pt-1">
                    <div>
                      <p
                        class="small p-2 me-3 mb-3 text-dark rounded-5"
                        style={{
                          color: "black",
                          backgroundColor: "#ffff",
                          borderRadius: "10px",
                          maxWidth: "500px",
                          fontSize: "20px",
                          fontFamily: "'Montserrat', sans-serif",
                        }}
                      >
                        Dolorum quasi voluptates quas amet in repellendus
                        perspiciatis fugiat
                      </p>
                    </div>
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                      alt="avatar 1"
                      style={{ width: "45px", height: "100%" }}
                    />
                  </div>
                  <div class="d-flex justify-content-between">
                    <p class="small mb-1 text-muted">23 Jan 6:10 pm</p>
                    <p class="small mb-1">Johny Bullock</p>
                  </div>
                  <div class="d-flex flex-row justify-content-end mb-4 pt-1">
                    <div>
                      <p
                        class="small p-2 me-3 mb-3 text-dark rounded-5"
                        style={{
                          color: "black",
                          backgroundColor: "#ffff",
                          borderRadius: "10px",
                          maxWidth: "500px",
                          fontSize: "20px",
                          fontFamily: "'Montserrat', sans-serif",
                        }}
                      >
                        Dolorum quasi voluptates quas amet in repellendus
                        perspiciatis fugiat
                      </p>
                    </div>
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                      alt="avatar 1"
                      style={{ width: "45px", height: "100%" }}
                    />
                  </div>
                </div>
                <div class="card-footer text-muted d-flex justify-content-start align-items-center p-3">
                  <div class="input-group mb-0">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Type message"
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                    />
                    <button
                      class=" sc-button style-1"
                      type="button"
                      style={{
                        padding: "24px",
                      }}
                    >
                      <i class="fa-regular fa-paper-plane"></i>
                    </button>
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
