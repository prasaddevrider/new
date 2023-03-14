import React from 'react'
import "./Contact.css"
import Head from "../../images/demo8.webp"
import Header from '../../components/Header'
import {MdEmail} from "react-icons/md"
import {BsMessenger} from "react-icons/bs"
import {IoLogoWhatsapp} from "react-icons/io"
const Contact = () => {
  return (
   <>
    <Header title="get in touch" image={Head} >
      Lorem ipsum dolor sit amet consectetur adipisicing elit
      . Rem sit enim expedita incidunt pariatur tempora?
    </Header>
    <section className="contact">
      <div className="container contact-container">
        <div className="contact-wrapper">
          <a href="mailto:support@egattor.com" target="_blank" rel='noreferrer noopener'><MdEmail/></a>
          <a href="http://m.me/ernest_achiever" target="_blank" rel='noreferrer noopener'><BsMessenger/></a>
          <a href="https://whatsapp.com/dl/+919160856454" target="_blank" rel='noreferrer noopener'><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>
   </>
  )
}

export default Contact