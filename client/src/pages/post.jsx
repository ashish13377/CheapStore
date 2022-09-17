import React from 'react';
import DarkMode from '../components/header/DarkMode';
import BestSeller from '../components/layouts/BestSeller';
import dataBestSeller from '../assets/fake-data/dataBestSeller'



const Post = () => {
  return (
    
    <div className='creator' style={{ minHeight: "100vh"}}>
        <DarkMode />
     <BestSeller data={dataBestSeller}  stlye={{outerHeight: "100vh"}}/>
     
  </div>
 
  )
};

export default Post;
