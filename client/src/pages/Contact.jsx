import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Newsletters from "../components/layouts/Newsletters";
import Footer from "../components/footer/Footer";
import { Helmet } from "react-helmet";
import { serverAPI } from "../App";

const Contact = () => {
    const [fullName, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [data] = useState([
        {
            title: 'Need Help? Contact With Our Hotline',
            icon: 'fal fa-phone-volume',
            info: '+91 98749 35846',
            link: 'tel:+919874935846'
        },
        {
            title: 'Need Help? Contact With Our Hotline',
            icon: 'fal fa-map-marker-alt',
            info: 'Madurdaha, Hussainpur, Kolkata, West Bengal 700107',
            link: 'https://goo.gl/maps/ukjAYGg75ZmHuhM79'
        },
        {
            title: 'Need Help? Contact With Our Hotline',
            icon: 'fal fa-envelope-open',
            info: 'ashish.worksspace@gmail.com www.cheapstore.com',
            link: 'mailto:ashish.worksspace@gmail.com'
        },
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!fullName || !email || !subject) {
            alert("Please fill all provided fields!");
        } else {
            fetch(`${serverAPI}/contact/send-mail`, {
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
            <Helmet>
                <meta charSet="utf-8" />
                <title>CheapStore | Contact Us </title>
            </Helmet>
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
                        <iframe title="Bidzen" className="map-contact"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.9794553465804!2d88.40719621495835!3d22.504953985217693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027385911798e5%3A0xc958e491c09d9550!2s300%2C%20Jeet%20Suniti!5e0!3m2!1sen!2sin!4v1665636455735!5m2!1sen!2sin"
                            width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" />
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
                                            value={fullName}
                                            onChange={(e) => setFullname(e.target.value)}
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
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
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
                                            value={subject}
                                            onChange={(e) => setSubject(e.target.value)}
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
