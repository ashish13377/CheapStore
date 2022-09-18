import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import DarkMode from "../components/header/DarkMode";
import img from "../assets/images/background/img-register.jpg";

const Register = () => {
  const [registrationData, setRegistrationData] = useState({});

  // Registration..........................

  const handleRegistration = (e) => {
    const newRegistrationData = { ...registrationData };
    newRegistrationData[e.target.name] = e.target.value;
    setRegistrationData(newRegistrationData);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:4000/api/register/user",
        registrationData,
        {
          withCredentials: true,
        }
      );
      if (res.status === 200) {
        const data = res.data;
        Swal.fire({
          title: data.msg,
          icon: "success",
          confirmButtonText: "OK",
        });
        setRegistrationData({
          firstName: "",
          lastName: "",
          phoneNumber: "",
          userName: "",
          studentID: "",
          email: "",
          passowrd: "",
          cPassword: "",
          collegeName: "",
        });
      }
    } catch (err) {
      Swal.fire({
        title: err.response.data.msg,
        icon: "danger",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div>
      <section className="tf-section login-page register-page">
        <div className="container">
          <div className="row">
            <DarkMode />
            <div className="col-md-12">
              <div className="form-create-item-content">
                <div className="form-create-item">
                  <div className="sc-heading">
                    <h3>Create An Account</h3>
                    <p className="desc">
                      Most popular college products market place
                    </p>
                  </div>
                  <form
                    id="create-item-1"
                    method="POST"
                    onSubmit={submitHandler}
                  >
                    <div className="input-group">
                      <input
                        name="firstName"
                        value={registrationData.firstName}
                        onChange={handleRegistration}
                        type="text"
                        placeholder="First Name"
                        required
                      />
                      <input
                        name="lastName"
                        value={registrationData.lastName}
                        onChange={handleRegistration}
                        type="text"
                        placeholder="Last Name"
                        required
                      />
                    </div>
                    <div className="input-group">
                      <input
                        name="phoneNumber"
                        value={registrationData.phoneNumber}
                        onChange={handleRegistration}
                        type="text"
                        placeholder="Phone Number"
                        required
                      />
                      <input
                        name="userName"
                        value={registrationData.userName}
                        onChange={handleRegistration}
                        type="text"
                        placeholder="User Name"
                        required
                      />
                    </div>

                    <input
                      name="collegeName"
                      value={registrationData.collegeName}
                      onChange={handleRegistration}
                      type="text"
                      placeholder="College Name"
                      required
                    />
                    <input
                      name="studentID"
                      value={registrationData.studentID}
                      onChange={handleRegistration}
                      type="text"
                      placeholder="Student Id"
                      required
                    />
                    <input
                      name="email"
                      value={registrationData.email}
                      onChange={handleRegistration}
                      type="text"
                      placeholder="Email Address"
                      required
                    />
                    <div className="input-group">
                      <input
                        name="password"
                        value={registrationData.password}
                        onChange={handleRegistration}
                        type="password"
                        placeholder="Password"
                        required
                      />
                      <input
                        name="cPassword"
                        value={registrationData.cPassword}
                        onChange={handleRegistration}
                        type="password"
                        placeholder="Re-Password"
                        required
                      />
                    </div>

                    <button
                      name="submit"
                      type="submit"
                      className="sc-button style letter style-2"
                    >
                      <span>Register Now</span>
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
    </div>
  );
};

export default Register;
