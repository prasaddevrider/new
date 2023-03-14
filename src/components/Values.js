import React from 'react'
import Image from "../images/main1.jpg"
import SectionHead from './SectionHead';
import { GiCutDiamond } from "react-icons/gi"
import { values } from '../Data';
import Card from '../UI/Card';
const Values = () => {
  return (
   <>
  <section className="values">
    <div className="container values-container">
        <div className="values-left">
            <div className="values-img">
                <img src={Image} alt="valuesimg" className='image-fluid'/>
            </div>
        </div>
        <div className="values-right">
            <SectionHead icon={<GiCutDiamond/>} title="values">

            </SectionHead>
            <p>Lorem ipsum dolor sit amet consectetur adipis</p>
            <div className="values-wrapper">
                {
                    values.map(({id,title,icon,desc})=>{
                        return(
                            <Card className="values-value" key={id}>
                            <span>{icon}</span>
                              <h4>{title}</h4>
                              <small>{desc}</small>
                            </Card>
                        )
                    })
                }
            </div>
        </div>
    </div>
  </section>
   </>
  )
}

export default Values