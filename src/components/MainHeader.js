import React from 'react'
import { Link } from 'react-router-dom'
import header from "../images/head2.png"
function MainHeader() {
  return (
    <>
        <header className="main_header">
            <div className="container main_header-container">
               
                <div className="main-head-left">
                    <h4>#100days of work out</h4>
                    <h1>join the legends fitness gym</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur 
                        adipisicing elit. Minima quisquam ipsa 
                        reiciendis distinctio 
                    </p>
                    <Link to="/plans" className='btn btn-primary btn-lg'>Get Started</Link>
                </div>
                <div className="main-head-right">
                   <div className="main-header-circle"></div>
                   <div className="main-header-image">
                    <img src={header} alt="imaghead" />
                   </div>
                </div>
               
            </div>
        </header>
    </>
  )
}

export default MainHeader