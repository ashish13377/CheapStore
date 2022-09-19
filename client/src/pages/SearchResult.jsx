import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const SearchResult = () => {
  const [products, setProducts] = useState([]);
  const { name } = useParams();

  const GetAllProductsByFilter = async () => {
    try {
      const res = await axios.post(
        "http://localhost:4000/api/get/products/filter/name",
        { name },
        {
          withCredentials: true,
        }
      );
      if (res.status === 200) {
        setProducts(res.data.products);
      }
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    GetAllProductsByFilter();
  }, [name]);

  return (
    <div className="home-1">
      <Header />
      <div className="container">
        <div className="row m-5 d-flex">
          <div className="col-md-12 d-flex">
            {products.length === 0 ? (
              <h1>No Products Found</h1>
            ) : (
              products.map((item, index) => (
                <>
                  <div
                    key={index}
                    className="fl-item col-xl-3 col-lg-4 col-md-6"
                  >
                    <div className="sc-product-item style-5">
                      <div className="product-img">
                        <img src={item.images[0]} alt="Bidzen" />
                        <Link
                          to={`/item-details/${item._id}`}
                          className="sc-button style letter"
                        >
                          <span>View Details</span>
                        </Link>
                        <label>{"$ " + item.itemPrice}</label>
                      </div>
                      <div className="product-content">
                        <h5 className="title">
                          <Link to={`/item-details/${item._id}`}>
                            {item.itemName}
                          </Link>{" "}
                        </h5>
                        <div className="product-author flex">
                          <div className="avatar">
                            <img src={item.sellerImage} alt="Bidzen" />
                          </div>
                          <div className="infor">
                            <div className="author-name">
                              <Link to="/authors">{item.sellerName}</Link>
                            </div>
                            <span>Creator</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchResult;
