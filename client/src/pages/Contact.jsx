import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Newsletters from "../components/layouts/Newsletters";
import Footer from "../components/footer/Footer";

const Contact = () => {
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [data] = useState([
    {
      title: "Need Help? Contact With Our Hotline",
      icon: "fal fa-phone-volume",
      info: "+012 (345) 678 88",
      link: "tel:012345678",
    },
    {
      title: "Need Help? Contact With Our Hotline",
      icon: "fal fa-map-marker-alt",
      info: "55 Main Street, 2nd Block,3rd Floor, New York",
      link: "",
    },
    {
      title: "Need Help? Contact With Our Hotline",
      icon: "fal fa-envelope-open",
      info: "hotlineinfo@gmail.com www.bidzen.net",
      link: "mailto:abc@gmail.com",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName || !email || !subject) {
      alert("Please fill all provided fields!");
    } else {
      fetch("http://localhost:4000/contact/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          subject,
        }),
      })
        .then((res) => res.json())
        .then((data) =>
          alert("Message send! we will contact you as soon as possible.")
        )
        .catch((error) => alert(error));
    }
  };

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
                  <h2 className="heading">Contact</h2>
                </div>
                <div className="breadcrumbs">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Contact</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tf-contact tf-section">
        <div className="container">
          <div className="row">
            {data.map((item, index) => (
              <div key={index} className="col-md-4">
                <div className="sc-contact-infor">
                  <h4>{item.title}</h4>
                  <div className="icon">
                    <i className={item.icon}></i>
                  </div>
                  <div className="infor">
                    <Link to={item.link}>{item.info}</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid">
          <div className="row">
            <iframe
              title="Bidzen"
              className="map-contact"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.1583091352!2d-74.11976373946234!3d40.69766374859258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2zVGjDoG5oIHBo4buRIE5ldyBZb3JrLCBUaeG7g3UgYmFuZyBOZXcgWW9yaywgSG9hIEvhu7M!5e0!3m2!1svi!2s!4v1640857108284!5m2!1svi!2s"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <section className="tf-section login-page contact-page pd-top-0">
        <div className="container">
          <div className="row jtf-content-center">
            <div className="col-md-8">
              <div className="form-create-item-content">
                <div className="form-create-item">
                  <div className="sc-heading">
                    <h3>Send Us Message</h3>
                    <p className="desc">
                      Most popular gaming digital nft market place{" "}
                    </p>
                  </div>
                  <form
                    id="create-item-1"
                    method="POST"
                    onSubmit={handleSubmit}
                    acceptCharset="utf-8"
                  >
                    <input
                      type="text"
                      id="name"
                      className="tb-my-input"
                      name="name"
                      tabIndex="1"
                      placeholder="Your Full Name"
                      aria-required="true"
                      required
                    />
                    <input
                      type="email"
                      id="email"
                      className="tb-my-input"
                      name="email"
                      tabIndex="2"
                      placeholder="Email Address"
                      aria-required="true"
                      required
                    />
                    <textarea
                      id="comment-message"
                      name="message"
                      tabIndex="4"
                      placeholder="Write Message"
                      aria-required="true"
                    ></textarea>
                    <button
                      name="submit"
                      type="submit"
                      id="comment-reply"
                      className="sc-button style letter style-2"
                    >
                      <span>Send Message</span>{" "}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Newsletters />
      <Footer />
    </div>
  );
};

export default Contact;
