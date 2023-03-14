import React from 'react'
import { Link } from 'react-router-dom'
import "./PagenotFound.css"


const PagenotFound = () => {
  return (
    <>
     <section>
      <div className="notfound-container">
      
        <h2>page not found</h2>
        <Link to="/" className='btn btn-danger btn-sm'>Go Back</Link>
      </div>
     </section>
    </>
  )
}

export default PagenotFound