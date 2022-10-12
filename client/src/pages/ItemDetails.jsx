import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/header/Header";

import "react-tabs/style/react-tabs.css";

import Newsletters from "../components/layouts/Newsletters";
import Footer from "../components/footer/Footer";

import axios from "axios";

const ItemDetails = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const [mainImage, setMainImage] = useState("");

  const getProduct = async (id) => {
    try {
      const res = await axios.post(
        "http://localhost:4000/api/get/product/byid",
        { id }
      );
      if (res.status === 200) {
        setProduct(res.data.product);
        setMainImage(res.data.product.images[0]);
      }
    } catch (err) {}
  };

  useEffect(() => {
    getProduct(id);
  }, []);
  return (
    <div className="item-details">
      <Header />
      <section className="fl-page-title">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-inner flex">
                <div className="page-title-heading">
                  <h2 className="heading">Product Details</h2>
                </div>
                <div className="breadcrumbs">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Product Details</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section item-details-page">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-12 col-md-12">
              <div className="images p-3 item-media">
                <div className="text-center p-4 media">
                  <img id="main-image" src={mainImage} width="250" />
                </div>
                <div className="thumbnail text-center">
                  {product.images?.map((img) => {
                    return (
                      <img
                        onClick={(e) => setMainImage(img)}
                        src={img}
                        width="60"
                        style={{
                          margin: "0 20px",
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12 col-md-12">
              <div className="content-item">
                <h3> {product.itemName}</h3>
                <h4 style={{ paddingBottom: "10px" }}>
                  {" "}
                  Rs. {product.itemPrice}
                </h4>
                <h6 style={{ paddingBottom: "10px" }}> Product Description</h6>
                <p className="mg-bt-42">
                  {product.description}
                  <br></br>
                </p>
                <hr></hr>
                <div className="author-item">
                  <div className="avatar">
                    <img src={product.sellerImage} alt="Bidzen" />
                  </div>
                  <div className="infor">
                    <div className="create">Owned By</div>
                    <h6>
                      <Link to="/authors">{product.sellerName}</Link>{" "}
                    </h6>
                    <div className="widget-social">
                      <ul>
                        <li>
                          <Link to="#" className="active">
                            <i className="fab fa-facebook-f"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fab fa-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fab fa-instagram"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fab fa-linkedin-in"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <ul className="list-details-item">
                  <li>
                    <span className="name">Email: {product.sellerEmail}</span>{" "}
                  </li>
                  <li>College Name: {product.sellerCollegeName}</li>
                  <li>Department: {product.sellerDepartment}</li>
                  <li>
                    Call Now:{" "}
                    <a href={`tel:+91${product.sellerNumber}`}>
                      +91 {product.sellerNumber}{" "}
                    </a>
                  </li>
                </ul>
                <Link
                  to={`/chat/${product.sellerID}`}
                  className="sc-button style letter style-2 style-item-details"
                >
                  <span>Chat with Seller</span>
                </Link>
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

export default ItemDetails;
