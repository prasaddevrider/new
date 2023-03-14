import React from 'react'


const Header = ({children,image,title}) => {
  return (
    <>
        <header className='header'>
          <div className="header-container">
            <div className="header-container-bg">
              <img src={image} alt="headerimg" className='image-contant' />
            </div>
            <div className="head-content">
              <h2>{title}</h2>
              <p>{children}</p>
            </div>
          </div>
        </header>
    </>
  )
}

export default Header