import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

const PopularCollection = (props) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("select category");
  const data = props.data;
  const [visible, setVisible] = useState(12);
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  // Getting all products

  const getAllProducts = async () => {
    setCategory("All");
    try {
      const res = await axios.get("http://localhost:4000/api/get/products", {
        withCredentials: true,
      });
      if (res.status === 200) {
        setProducts(res.data.products);
      }
    } catch (err) {
      alert(err);
    }
  };
  const getAllProductsByFilter = async (cat) => {
    setCategory(cat);
    try {
      const res = await axios.post(
        "http://localhost:4000/api/get/products/filter",
        { cat },
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
    getAllProducts();
  }, []);
  return (
    <section className="tf-section trendy-colection-page style-2">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="wg-drop-category seclect-box">
              <Dropdown>
                <Dropdown.Toggle
                  className="btn-selector nolink"
                  id="dropdown-basic"
                >
                  <span>{category}</span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={getAllProducts}>
                    <span>All</span>
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => getAllProductsByFilter("Electronics")}
                  >
                    <span>Electronics</span>
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => getAllProductsByFilter("Stationery")}
                  >
                    <span>Stationery</span>
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => getAllProductsByFilter("Books")}
                  >
                    <span>Books</span>
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => getAllProductsByFilter("Fashions")}
                  >
                    <span>Fashions</span>
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => getAllProductsByFilter("Furniture")}
                  >
                    <span>Furniture</span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle
                  className="btn-selector nolink"
                  id="dropdown-basic"
                >
                  <span>New Items</span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">
                    <span>New bestsellers</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <span>New releases</span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown>
                <Dropdown.Toggle
                  className="btn-selector nolink"
                  id="dropdown-basic"
                >
                  <span>Buy Now</span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">
                    <span>Wallet</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <span>Website</span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle
                  className="btn-selector nolink"
                  id="dropdown-basic"
                >
                  <span>Sort By</span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">
                    <span>View</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <span>Rating</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <span>Sale</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <span>Date</span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <button className="sc-button style letter style-2">
                <span>Filter</span>{" "}
              </button>
            </div>
          </div>
          {products.slice(0, visible).map((item, index) => (
            <div key={index} className="fl-item col-xl-3 col-lg-4 col-md-6">
              <div className="sc-product-item style-5">
                <div
                  className="product-img"
                  style={{
                    height: "300px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={item.images[0]}
                    alt="Bidzen"
                    style={{
                      width: "90%",
                      height: "90%",
                      objectFit: "cover",
                    }}
                  />
                  <Link
                    to={`/item-details/${item._id}`}
                    className="sc-button style letter"
                  >
                    <span>View Details</span>
                  </Link>
                  <label style={{ fontSize: "20px" }}>
                    {"$ " + item.itemPrice}
                  </label>
                </div>
                <div className="product-content">
                  <h5 className="title" style={{ fontSize: "20px" }}>
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
          ))}

          {visible < data.length && (
            <div className="col-md-12">
              <button
                id="loadmore"
                className=" sc-button style letter style-2"
                onClick={showMoreItems}
              >
                <span>Explore More</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PopularCollection;
