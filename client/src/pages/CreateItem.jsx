import React from "react";
import Header from "../components/header/Header";
import Create from "../components/layouts/creacte-item/Create";
import Newsletters from "../components/layouts/Newsletters";
import Footer from "../components/footer/Footer";
import { useParams } from "react-router-dom";

const CreateItem = () => {
  const { name } = useParams();
  return (
    <div>
      <Header />
      <Create name={name} />
      <Newsletters />
      <Footer />
    </div>
  );
};

export default CreateItem;
