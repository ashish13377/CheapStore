import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import DarkMode from "../components/header/DarkMode";
const Admin = () => {
  const [regRequests, setRegrequests] = useState([]);
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
  return (
    <div>
      <section className="tf-section login-page">
        <div className="container">
          <div className="row">
            <DarkMode />
            <div className="col-md-12">
              <table class="table m-5" style={{ fontSize: "30px" }}>
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Contact No</th>

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

                        <td>{req.studentID}</td>
                        <td style={{ cursor: "pointer" }}>Download</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <i
                              class="fa-solid fa-check p-2 mr-3"
                              style={{
                                color: "green",
                                fontSize: "40px",
                                cursor: "pointer",
                              }}
                              onClick={() => approveRequest(req._id)}
                            ></i>
                            <i
                              class="fa-regular fa-circle-xmark p-2"
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
