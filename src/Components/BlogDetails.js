import React from 'react'
import { useParams } from 'react-router'
import {useNavigate} from 'react-router-dom'
import { useFetch } from '../useFetch';

const BlogDetails = () => {
    const url = "http://localhost:8000/blogs"; 
    const {id} = useParams();
    const navigate = useNavigate()
    const {data : blog,isLoading,error} = useFetch(url + `/${id}`);
    const handleClick = () => {
        fetch(url + `/${blog.id}`,{
            method:"DELETE"

        }).then(() => {
            navigate('/')
        })
    }
  return (
    <div className='blog-details'>
    {
        isLoading && <div>Loading....</div>
    }
    {
        error && <div>{error}</div>
    }
    {
        blog && (
            <article>
            <h2>Written By {blog.author}</h2>
            <div>{blog.body}</div>
            <button onClick={handleClick}>Delete Blog</button>
            </article>
        )
    }
    </div>
  )
}

export default BlogDetails