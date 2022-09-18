import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import img from "../../../assets/images/background/img-create-item.jpg";

const Create = () => {
  const [itemData, setItemData] = useState({});
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Update user..........................

  const handleUpdate = (e) => {
    const newLoginData = { ...itemData };
    newLoginData[e.target.name] = e.target.value;
    setItemData(newLoginData);
  };

  // Hendla file

  const handleFile = async (e) => {
    const data = new FormData();
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
      setIsLoading(false);
    } catch (err) {
      alert(err);
      setIsLoading(false);
    }
  };

  const uploadItem = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:4000/api/user/update/profileinfo",
        { itemData, images },
        {
          withCredentials: true,
        }
      );
      console.log(res);
      if (res.status === 200) {
        Swal.fire({
          title: res.data.msg,
          icon: "success",
          confirmButtonText: "OK",
        });
      }
    } catch (err) {
      Swal.fire({
        title: err.response.data.msg,
        icon: "success",
        confirmButtonText: "OK",
      });
    }
  };

  return (
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
                  acceptCharset="utf-8"
                >
                  <div className="input-group">
                    <input
                      name="name"
                      type="text"
                      placeholder="Item Name"
                      required
                    />
                    <input
                      name="number"
                      type="text"
                      placeholder="Item Price"
                      required
                    />
                  </div>

                  <textarea
                    id="comment-message"
                    name="message"
                    tabIndex="4"
                    placeholder="Description"
                    aria-required="true"
                  ></textarea>
                  <hr></hr>
                  <h6 style={{}}>UPLOAD UP TO 8 PHOTOS</h6>
                  <p style={{ paddingBottom: "20px", color: "red" }}>
                    * This field is mandatory
                  </p>
                  <div class="row">
                    <div class="col">
                      <label className="uploadFile">
                        <input
                          type="file"
                          className="inputfile form-control"
                          name="file"
                        />
                        <span className="icon">
                          <i className="fa-solid fa-upload"></i>
                        </span>
                      </label>
                    </div>
                    <div class="col">
                      <label className="uploadFile">
                        <input
                          type="file"
                          className="inputfile form-control"
                          name="file"
                        />
                        <span className="icon">
                          <i className="fa-solid fa-upload"></i>
                        </span>
                      </label>
                    </div>
                    <div class="col">
                      {" "}
                      <label className="uploadFile">
                        <input
                          type="file"
                          className="inputfile form-control"
                          name="file"
                        />
                        <span className="icon">
                          <i className="fa-solid fa-upload"></i>
                        </span>
                      </label>
                    </div>
                    <div class="col">
                      {" "}
                      <label className="uploadFile">
                        <input
                          type="file"
                          className="inputfile form-control"
                          name="file"
                        />
                        <span className="icon">
                          <i className="fa-solid fa-upload"></i>
                        </span>
                      </label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <label className="uploadFile">
                        <input
                          type="file"
                          className="inputfile form-control"
                          name="file"
                        />
                        <span className="icon">
                          <i className="fa-solid fa-upload"></i>
                        </span>
                      </label>
                    </div>
                    <div class="col">
                      <label className="uploadFile">
                        <input
                          type="file"
                          className="inputfile form-control"
                          name="file"
                        />
                        <span className="icon">
                          <i className="fa-solid fa-upload"></i>
                        </span>
                      </label>
                    </div>
                    <div class="col">
                      {" "}
                      <label className="uploadFile">
                        <input
                          type="file"
                          className="inputfile form-control"
                          name="file"
                        />
                        <span className="icon">
                          <i className="fa-solid fa-upload"></i>
                        </span>
                      </label>
                    </div>
                    <div class="col">
                      {" "}
                      <label className="uploadFile">
                        <input
                          type="file"
                          className="inputfile form-control"
                          name="file"
                        />
                        <span className="icon">
                          <i className="fa-solid fa-upload"></i>
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
                        name="name"
                        type="text"
                        placeholder="Name"
                        required
                      />
                      <input
                        name="number"
                        type="text"
                        placeholder="Number"
                        required
                      />
                    </div>
                    <div className="input-group">
                      <input
                        name="name"
                        type="text"
                        placeholder="Email"
                        required
                      />
                      <input
                        name="number"
                        type="text"
                        placeholder="Department"
                        required
                      />
                    </div>
                    <textarea
                      id="comment-message"
                      name="message"
                      tabIndex="4"
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
                    <span>Create Item</span>{" "}
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
  );
};

export default Create;
