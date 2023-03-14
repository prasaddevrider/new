import React from 'react'
import "./Trainer.css"
import { trainers } from '../../Data'
import Header from '../../components/Header'
import head from "../../images/plan1.webp"
import { BsInstagram } from 'react-icons/bs'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import Trainers from '../../components/Trainers'

const Trainer = () => {
  return (
   <>
   <Header title="our trainers" image={head}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Nemo, rerum modi quisquam delectus illum laudantium.
   </Header>
   <section className="trainer">
    <div className="container trainer-container">
      {
        trainers.map(({id,image,name,job,socials})=>{
          return(
<Trainers key={id} image={image} name={name} job={job} socials={
  [
    {icon:<BsInstagram/>,link:socials[0]},
    {icon:<AiOutlineTwitter/>,link:socials[1]},
    {icon:<FaFacebook/>,link:socials[2]},
    {icon:<FaLinkedinIn/>,link:socials[3]},
  ]
} >

</Trainers>)
        })
      }
    </div>
   </section>
   </>
  )
}

export default Trainer