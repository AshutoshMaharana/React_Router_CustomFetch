import React, { useState } from 'react'
// import data from '../data.json'
import BlogList from './BlogList';
import { useFetch } from '../useFetch';

const Home = () => {
   const url = "http://localhost:8000/blogs"; 
   const {data,isLoading,errMessage} = useFetch(url);
   const [blogData,setBlogData] = useState()
   const handleDelete = (id) =>{
        const newBlogs =data.filter((blog) =>blog.id!==id)
        setBlogData(newBlogs)
    }
    
  return <div className='home'>
      <h2>HomePage</h2>
      {errMessage && <div>{errMessage}</div>}
      {isLoading && <div>Loading...</div>}
        {data  &&
        <BlogList blogs ={blogData?blogData:data} handleDelete={handleDelete}/>}
        {/*  <BlogList blogs ={data} />} */}
  </div>;
};

export default Home;
