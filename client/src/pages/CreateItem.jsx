import React from 'react';
import Header from '../components/header/Header';
import Create from '../components/layouts/creacte-item/Create';
import  Newsletters from '../components/layouts/Newsletters';
import Footer from '../components/footer/Footer';

const CreateItem = () => {
return <div>
    <Header />
    <Create />
    <Newsletters />
    <Footer />
  </div>;
};

export default CreateItem;
