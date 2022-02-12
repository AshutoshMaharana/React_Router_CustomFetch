import React from 'react'
// import data from '../data.json'
import BlogList from './BlogList';
import { useFetch } from '../useFetch';

const Home = () => {
   const url = "http://localhost:8000/blogs"; 
   const {data,isLoading,errMessage} = useFetch(url);
  //  const handleDelete = (id) =>{
  //       const newBlogs =blogs.filter((blog) =>blog.id!==id)
  //       setBlogs(newBlogs)
  //   }
    
  return <div className='home'>
      <h2>HomePage</h2>
      {errMessage && <div>{errMessage}</div>}
      {isLoading && <div>Loading...</div>}
        {data  &&
        //<BlogList blogs ={data} handleDelete={handleDelete}/>}
        <BlogList blogs ={data} />}
  </div>;
};

export default Home;
