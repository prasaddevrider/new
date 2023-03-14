import React from 'react'
import Header from '../../components/Header'
import headerimg from "../../images/head7.jpg"
import Story from "../../images/head5.jpg"
import Story1 from "../../images/head6.jpg"
import Story2 from "../../images/img5.jpg"

import "./About.css"
const About = () => {
  return (
    <>
    <Header title="About us" image={headerimg}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero minima 
      cupiditate accusantium asperiores delectus hic tempora maiores quia expedita minus.
    </Header>
     <section className='about-story'>
      <div className="container about-story-container">
        <div className="about-section-img">
          <img src={Story} alt="story img" />
        </div>
        <div className="about-section-content">
          <h1>our story</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Eum tenetur sequi atque soluta ad dignissimos
            qui velit. Officia, est harum?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Eum tenetur sequi atque soluta ad dignissimos
            qui velit. Officia, est harum?</p>
            <p>Lorem ipsum dolor sit amet consectetur
            qui velit. Officia, est harum?</p>
        </div>
      </div>
     </section>
     <section className='about-vision'>
      <div className="container about-vision-container">
        
        <div className="about-section-content">
          <h1>our vision</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Eum tenetur sequi atque soluta ad dignissimos
            qui velit. Officia, est harum?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Eum tenetur sequi atque soluta ad dignissimos
            qui velit. Officia, est harum?</p>
            </div>
            <div className="about-section-img">
          <img src={Story2} alt="story img"  className='vision-img'/>
        </div>
        
      </div>
     </section>

     
     <section className='about-mission'>
      <div className="container about-mission-container">
        <div className="about-section-img">
          <img src={Story1} alt="story img" />
        </div>
        <div className="about-section-content">
          <h1>our mission</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Eum tenetur sequi atque soluta ad dignissimos
            qui velit. Officia, est harum?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Eum tenetur sequi atque soluta ad dignissimos
            qui velit. Officia, est harum?</p>
            <p>Lorem ipsum dolor sit amet consectetur
            qui velit. Officia, est harum?</p>
        </div>
      </div>
     </section>
     </>
  )
}

export default About