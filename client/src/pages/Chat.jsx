import React, { useState } from "react";
import { Link } from "react-router-dom";
import io from "socket.io-client";

import ScrollToBottom from "react-scroll-to-bottom";
import Header from "../components/header/Header";
import Newsletters from "../components/layouts/Newsletters";
import Footer from "../components/footer/Footer";

const socket = io.connect("http://localhost:4000");

const chat = () => {
  return (
    <div>
      <Header />
      <section className="fl-page-title">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-inner flex">
                <div className="page-title-heading">
                  <h2 className="heading">Blog Destails</h2>
                </div>
                <div className="breadcrumbs">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Blog Destails</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="tf-section post-details">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <article className="blog-details">
                <div className="post-media"></div>
              </article>
            </div>
            <div className="col-lg-4 col-md-12">
              <aside className="side-bar">
                <div className="widget wg-search"></div>
              </aside>
            </div>
          </div>
        </div>
      </div>
      <Newsletters />
      <Footer />
    </div>
  );
};

export default chat;
