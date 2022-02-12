import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({blogs,handleDelete}) => {
  return <div>
      { blogs.map((blog) => (
              <div className='blog-preview' key = {blog.id}>
                <Link to = {`/blogs/${blog.id}`}>
                  <h2>{blog.title}</h2>
                  <p>Written By - {blog.author}</p>
                  </Link>
                  <button onClick={() =>handleDelete(blog.id)}>Delete Blog</button>
            </div>

      ))}
  </div>;
};

export default BlogList;
