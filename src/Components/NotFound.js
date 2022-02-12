import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='not-found'>
        <h2>Error</h2>
        <p>The Page Cannot be Found</p>
        <Link to= "/">Back To Home</Link>
    </div>
  )
}

export default NotFound