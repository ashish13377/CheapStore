import React from 'react';
import DarkMode from '../components/header/DarkMode';
import PostCat from '../components/layouts/Categories/PostCat';
import postdata from '../assets/fake-data/postdata'



const Post = () => {
  return (
    
    <div className='creator' style={{ minHeight: "100vh"}}>
        <DarkMode />
     <PostCat data={postdata}  stlye={{outerHeight: "100vh"}}/>
     
  </div>
 
  )
};

export default Post;
