import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { saveAs } from "file-saver";
import Swal from "sweetalert2";
import DarkMode from "../components/header/DarkMode";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Admin = () => {
  const [regRequests, setRegrequests] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Getting Admin

    const getRootUser = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/isadmin", {
          withCredentials: true,
        });

        if (res.status === 200) {
        }
      } catch (err) {
        console.log(err);
        navigate("/");
      }
    };
    getRootUser();
  }, []);

  // Geting Requests from Database
  const getRequests = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/get/requests");
      if (res.status === 200) {
        const requests = res.data.requests;
        setRegrequests(requests);
      }
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  const downloadID = (collegeID) => {
    saveAs(collegeID, "CollegeID.jpg");
  };

  // Approving requsets

  const approveRequest = async (id) => {
    try {
      const res = await axios.post(
        "http://localhost:4000/api/approve/request",
        {
          id,
        }
      );
      if (res.status === 200) {
        const data = res.data;
        Swal.fire({
          title: data.msg,
          icon: "success",
          confirmButtonText: "OK",
        });
        //  sendEmail(email,storename,ownername);
      }
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  // Rejecting Requests

  const rejectRequest = async (id) => {
    try {
      const res = await axios.post("http://localhost:4000/api/reject/request", {
        id,
      });
      if (res.status === 200) {
        const data = res.data;
        Swal.fire({
          title: data.msg,
          icon: "danger",
          confirmButtonText: "OK",
        });
        // sendEmailOfReject(email, storename, ownername);
      }
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  useEffect(() => {
    getRequests();
  });

  const logout = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/logout", {
        withCredentials: true,
      });
      console.log(res);
      if (res.status === 200) {
        Swal.fire({
          title: res.data.msg,
          icon: "success",
          confirmButtonText: "OK",
        })
          .then((res) => navigate("/"))
          .catch((err) => {});
      }
    } catch (err) {}
  };

  return (
    <div>
         <Helmet>
    <meta charSet="utf-8" />
    <title>CheapStore | Admin </title>
  </Helmet>

      <section className="tf-section login-page">
        <div className="container">
          <div className="row">
            <DarkMode />
            <div
              style={{
                fontSize: "26px",
                marginRight: "0",
                marginLeft: "auto",
                textAlign: "right",
                cursor: "pointer",
              }}
            >
              <span onClick={logout}>
                <i className="fa-solid fa-right-from-bracket"></i>
              </span>
            </div>
            <div className="col-md-12">
              <table
                className="table m-5"
                style={{ fontSize: "30px", width: "100%" }}
              >
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Contact No</th>
                    <th scope="col">College Name</th>

                    <th scope="col">Student ID</th>
                    <th scope="col">Id Proof</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {regRequests.map((req, index) => {
                    return (
                      <tr>
                        <td>{req.firstName + " " + req.lastName}</td>
                        <td>{req.phoneNumber}</td>
                        <td>{req.collegeName}</td>

                        <td>{req.studentID}</td>
                        <td style={{ cursor: "pointer" }}>
                          <button onClick={(e) => downloadID(req.collegeID)}>
                            Download
                          </button>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <i
                              className="fa-solid fa-check p-2 mr-3"
                              style={{
                                color: "green",
                                fontSize: "40px",
                                cursor: "pointer",
                              }}
                              onClick={() => approveRequest(req._id)}
                            ></i>
                            <i
                              className="fa-regular fa-circle-xmark p-2"
                              style={{
                                color: "tomato",
                                fontSize: "40px",
                                cursor: "pointer",
                              }}
                              onClick={() => rejectRequest(req._id)}
                            ></i>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admin;
