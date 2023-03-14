
import React from 'react'
import Header from '../../components/Header'
import head from "../../images/plan2.webp"
import { plans } from '../../Data'
import Card from "../../UI/Card"
import "../plans/Plans.css"

const Plans = () => {
  return (
    <>
    <Header title="membership plans" image={head}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
       Blanditiis aliquam atque quisquam quae alias. Magni.
    </Header>
    <section className="plans">
      <div className="container plans-container">
        {
          plans.map(({id,name,desc,price,fectures})=>{
            return(
              <Card key={id} className="plan">
                  <h3>{name}</h3>
                   <small>{desc}</small>
                   <h1 className='d-flex'>{`$${price}`}<p className='memo'>/mo</p></h1>
                  <h4>fectures</h4>
                  {
                    fectures.map(({fecture,avilable},index)=>{
                      return(
                        <p key={index} className={!avilable ? "disabled" : ""}>{fecture}</p>
                      )
                    })
                  }
                  <button className="btn btn-primary ">choose plan</button>
              </Card>

            )
          })
        }
      </div>
    </section>
    </>
  )
}

export default Plans