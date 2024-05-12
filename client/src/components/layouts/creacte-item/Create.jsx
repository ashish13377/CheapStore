import React, { useState } from "react";
import axios from "axios";
import Loader from "../../Loader/Loader";
import { serverAPI } from "../../../App";
import Swal from "sweetalert2";
import img from "../../../assets/images/background/img-create-item.jpg";

const Create = ({ name }) => {
  const [itemData, setItemData] = useState({});
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [icon1, setIcon1] = useState("fa-solid fa-upload");
  const [icon2, setIcon2] = useState("fa-solid fa-upload");
  const [icon3, setIcon3] = useState("fa-solid fa-upload");
  const [icon4, setIcon4] = useState("fa-solid fa-upload");
  const [icon5, setIcon5] = useState("fa-solid fa-upload");
  const [icon6, setIcon6] = useState("fa-solid fa-upload");
  const [icon7, setIcon7] = useState("fa-solid fa-upload");
  const [icon8, setIcon8] = useState("fa-solid fa-upload");

  // Update user..........................

  const handleCreateItem = (e) => {
    const newLoginData = { ...itemData };
    newLoginData[e.target.name] = e.target.value;
    setItemData(newLoginData);
  };

  // Handle file

  const handleFile8 = async (e) => {
    const data = new FormData();
    console.log(e.target.nextSibling.children[0]);
    data.append("file", e.target.files[0]);
    data.append("upload_preset", "chipstore");
    data.append("cloud_name", "basustudent");
    try {
      setIsLoading(true);
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/basustudent/image/upload",
        data
      );
      const dat = res.data;
      setImages([...images, dat.secure_url]);
      Swal.fire({
        title: "Image Selected",
        icon: "success",
        confirmButtonText: "OK",
      });
      setIcon8("fa-solid fa-check");
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };
  const handleFile1 = async (e) => {
    const data = new FormData();
    console.log(e.target.nextSibling.children[0]);
    data.append("file", e.target.files[0]);
    data.append("upload_preset", "chipstore");
    data.append("cloud_name", "basustudent");
    try {
      setIsLoading(true);
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/basustudent/image/upload",
        data
      );
      const dat = res.data;
      setImages([...images, dat.secure_url]);
      Swal.fire({
        title: "Image Selected",
        icon: "success",
        confirmButtonText: "OK",
      });
      setIcon1("fa-solid fa-check");
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };
  const handleFile2 = async (e) => {
    const data = new FormData();
    console.log(e.target.nextSibling.children[0]);
    data.append("file", e.target.files[0]);
    data.append("upload_preset", "chipstore");
    data.append("cloud_name", "basustudent");
    try {
      setIsLoading(true);
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/basustudent/image/upload",
        data
      );
      const dat = res.data;
      setImages([...images, dat.secure_url]);
      Swal.fire({
        title: "Image Selected",
        icon: "success",
        confirmButtonText: "OK",
      });
      setIcon2("fa-solid fa-check");
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };
  const handleFile3 = async (e) => {
    const data = new FormData();
    console.log(e.target.nextSibling.children[0]);
    data.append("file", e.target.files[0]);
    data.append("upload_preset", "chipstore");
    data.append("cloud_name", "basustudent");
    try {
      setIsLoading(true);
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/basustudent/image/upload",
        data
      );
      const dat = res.data;
      setImages([...images, dat.secure_url]);
      Swal.fire({
        title: "Image Selected",
        icon: "success",
        confirmButtonText: "OK",
      });
      setIcon3("fa-solid fa-check");
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };
  const handleFile4 = async (e) => {
    const data = new FormData();
    console.log(e.target.nextSibling.children[0]);
    data.append("file", e.target.files[0]);
    data.append("upload_preset", "chipstore");
    data.append("cloud_name", "basustudent");
    try {
      setIsLoading(true);
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/basustudent/image/upload",
        data
      );
      const dat = res.data;
      setImages([...images, dat.secure_url]);
      Swal.fire({
        title: "Image Selected",
        icon: "success",
        confirmButtonText: "OK",
      });
      setIcon4("fa-solid fa-check");
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };
  const handleFile5 = async (e) => {
    const data = new FormData();
    console.log(e.target.nextSibling.children[0]);
    data.append("file", e.target.files[0]);
    data.append("upload_preset", "chipstore");
    data.append("cloud_name", "basustudent");
    try {
      setIsLoading(true);
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/basustudent/image/upload",
        data
      );
      const dat = res.data;
      setImages([...images, dat.secure_url]);
      Swal.fire({
        title: "Image Selected",
        icon: "success",
        confirmButtonText: "OK",
      });
      setIcon5("fa-solid fa-check");
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };
  const handleFile6 = async (e) => {
    const data = new FormData();
    console.log(e.target.nextSibling.children[0]);
    data.append("file", e.target.files[0]);
    data.append("upload_preset", "chipstore");
    data.append("cloud_name", "basustudent");
    try {
      setIsLoading(true);
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/basustudent/image/upload",
        data
      );
      const dat = res.data;
      setImages([...images, dat.secure_url]);
      Swal.fire({
        title: "Image Selected",
        icon: "success",
        confirmButtonText: "OK",
      });
      setIcon6("fa-solid fa-check");
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };
  const handleFile7 = async (e) => {
    const data = new FormData();
    console.log(e.target.nextSibling.children[0]);
    data.append("file", e.target.files[0]);
    data.append("upload_preset", "chipstore");
    data.append("cloud_name", "basustudent");
    try {
      setIsLoading(true);
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/basustudent/image/upload",
        data
      );
      const dat = res.data;
      setImages([...images, dat.secure_url]);
      Swal.fire({
        title: "Image Selected",
        icon: "success",
        confirmButtonText: "OK",
      });
      setIcon7("fa-solid fa-check");
      setIsLoading(false);
    } catch (err) {
      console.log(err)
      setIsLoading(false);
    }
  };

  const uploadItem = async (e) => {
    console.log(itemData, images);
    e.preventDefault();
    try {
      const res = await axios.post(
        `${serverAPI}/user/create/item`,
        { itemData, name, images },
        {
          withCredentials: true,
        }
      );
      if (res.status === 200) {
        Swal.fire({
          title: res.data.msg,
          icon: "success",
          confirmButtonText: "OK",
        });
        setImages([]);
      }
    } catch (err) {
      Swal.fire({
        title: err.response.data.msg,
        icon: "warning",
        confirmButtonText: "OK",
      });
      setImages([]);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className="tf-section create-item pd-top-0 mg-t-40">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="form-create-item-content">
                  <div className="form-create-item">
                    <div className="sc-heading">
                      <h3>Create Item</h3>
                      <p className="desc">Most popular student market place </p>
                    </div>
                    <form
                      id="create-item-1"
                      method="POST"
                      onSubmit={uploadItem}
                    >
                      <div className="input-group">
                        <input
                          name="itemName"
                          type="text"
                          placeholder="Item Name"
                          onChange={handleCreateItem}
                          value={itemData.itemName}
                          required
                        />
                        <input
                          name="itemPrice"
                          type="text"
                          onChange={handleCreateItem}
                          placeholder="Item Price"
                          value={itemData.itemPrice}
                          required
                        />
                      </div>

                      <textarea
                        id="comment-message"
                        name="description"
                        tabIndex="4"
                        onChange={handleCreateItem}
                        placeholder="Description"
                        value={itemData.description}
                        aria-required="true"
                      ></textarea>
                      <hr></hr>
                      <h6 style={{}}>UPLOAD UP TO 8 PHOTOS</h6>
                      <p style={{ paddingBottom: "20px", color: "red" }}>
                        * This field is mandatory
                      </p>
                      <div className="row">
                        <div className="col">
                          <label className="uploadFile">
                            <input
                              type="file"
                              className="inputfile form-control"
                              onChange={handleFile1}
                            />
                            <span className="icon">
                              <i className={icon1}></i>
                            </span>
                          </label>
                        </div>
                        <div className="col">
                          <label className="uploadFile">
                            <input
                              type="file"
                              className="inputfile form-control"
                              onChange={handleFile2}
                            />
                            <span className="icon">
                              <i className={icon2}></i>
                            </span>
                          </label>
                        </div>
                        <div className="col">
                          {" "}
                          <label className="uploadFile">
                            <input
                              type="file"
                              className="inputfile form-control"
                              onChange={handleFile3}
                            />
                            <span className="icon">
                              <i className={icon3}></i>
                            </span>
                          </label>
                        </div>
                        <div className="col">
                          {" "}
                          <label className="uploadFile">
                            <input
                              type="file"
                              className="inputfile form-control"
                              onChange={handleFile4}
                            />
                            <span className="icon">
                              <i className={icon4}></i>
                            </span>
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <label className="uploadFile">
                            <input
                              type="file"
                              className="inputfile form-control"
                              onChange={handleFile5}
                            />
                            <span className="icon">
                              <i className={icon5}></i>
                            </span>
                          </label>
                        </div>
                        <div className="col">
                          <label className="uploadFile">
                            <input
                              type="file"
                              className="inputfile form-control"
                              onChange={handleFile6}
                            />
                            <span className="icon">
                              <i className={icon6}></i>
                            </span>
                          </label>
                        </div>
                        <div className="col">
                          {" "}
                          <label className="uploadFile">
                            <input
                              type="file"
                              className="inputfile form-control"
                              onChange={handleFile7}
                            />
                            <span className="icon">
                              <i className={icon7}></i>
                            </span>
                          </label>
                        </div>
                        <div className="col">
                          {" "}
                          <label className="uploadFile">
                            <input
                              type="file"
                              className="inputfile form-control"
                              onChange={handleFile8}
                            />
                            <span className="icon">
                              <i className={icon8}></i>
                            </span>
                          </label>
                        </div>
                      </div>
                      <hr></hr>
                      <div style={{ paddingBottom: "20px" }}>
                        <h6 style={{}}>YOUR DETAILS</h6>
                        <p style={{ paddingBottom: "20px", color: "red" }}>
                          * This field is mandatory
                        </p>
                        <div className="input-group">
                          <input
                            name="sellerName"
                            type="text"
                            value={itemData.sellerName}
                            onChange={handleCreateItem}
                            placeholder="Name"
                            required
                          />
                          <input
                            name="sellerNumber"
                            type="text"
                            onChange={handleCreateItem}
                            value={itemData.sellerNumber}
                            placeholder="Number"
                            required
                          />
                        </div>
                        <div className="input-group">
                          <input
                            name="sellerEmail"
                            type="text"
                            onChange={handleCreateItem}
                            value={itemData.sellerEmail}
                            placeholder="Email"
                            required
                          />
                          <input
                            name="sellerDepartment"
                            type="text"
                            onChange={handleCreateItem}
                            value={itemData.sellerDepartment}
                            placeholder="Department"
                            required
                          />
                        </div>
                        <textarea
                          id="comment-message"
                          name="sellerLocation"
                          tabIndex="4"
                          onChange={handleCreateItem}
                          value={itemData.sellerLocation}
                          placeholder="Location"
                          aria-required="true"
                        ></textarea>
                      </div>

                      <button
                        name="submit"
                        type="submit"
                        id="submit"
                        className="sc-button style letter style-2"
                      >
                        <span>Create Item</span>
                      </button>
                    </form>
                  </div>
                  <div className="form-background">
                    <img src={img} alt="Bidzen" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Create;
