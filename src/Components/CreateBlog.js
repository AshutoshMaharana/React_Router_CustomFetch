import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const CreateBlog = () => {
    const url = "http://localhost:8000/blogs"; 
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [author,setAuthor] = useState('Akash')
    const [blog,setBlog] = useState({title,body,author})
    const [isLoading,setIsLoading] = useState(false)
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        setBlog({title,body,author})
        setIsLoading(true)
        fetch(url,{
            method:'POST',
            headers:{"content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(() => {
            setIsLoading(false)
            navigate("/")
            //New Blog Added
        })
        

    }
  return (
    <div className='create_blog'>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input  type='text' 
                    placeholder='Please Enter the Title'
                    required
                    value = {title}
                    onChange = {(e) => setTitle(e.target.value)}/>
            <label>Body:</label>
            <textarea 
                    required
                    value={body}
                    onChange = {(e) => setBody(e.target.value)}/>
            <label>Author</label>
            <select 
                value={author}
                onChange = {(e) => setAuthor(e.target.value)}>
                <option value = "Akash">Akash</option>
                <option value = "Auxy">Auxy</option>
                <option value = "Amitesh">Amitesh</option>

            </select>
            {!isLoading && <button type='submit'>Add Blog</button>}
            {isLoading && <button disabled>AAdding Blog...</button>}

        </form>
    </div>
  )
}

export default CreateBlog