import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import DarkMode from "../components/header/DarkMode";
import PostCat from "../components/layouts/Categories/PostCat";
import postdata from "../assets/fake-data/postdata";

const Post = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  // Getting root user data

  const getRootUser = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/user/islogin", {
        withCredentials: true,
      });
     
      if (res.status === 200) {
        setIsLogin(true);
      }
    } catch (err) {
      setIsLogin(false);
      Swal.fire({
        title: "Please Log in",
        icon: "warning",
        confirmButtonText: "OK",
      })
        .then((res) => navigate("/"))
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    getRootUser();
  }, []);
  return (
    <>
      {isLogin ? (
        <>
          <div className="creator" style={{ minHeight: "100vh" }}>
            <DarkMode />
            <PostCat data={postdata} stlye={{ outerHeight: "100vh" }} />
          </div>
        </>
      ) : null}
    </>
  );
};

export default Post;
