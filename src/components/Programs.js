import React from 'react'
import { FaCrown } from 'react-icons/fa'
import { AiFillCaretRight } from "react-icons/ai"
import SectionHead from './SectionHead'
import { programs } from '../Data'
import Card from '../UI/Card'
import { Link } from 'react-router-dom'

function Programs() {
  return (
    <>
        <section className="programs">
            <div className="container programs-container">
               <SectionHead icon={<FaCrown/>} title="programs"/>
            
            <div className="programs-wrapper">
                 {
                    programs.map(({id,icon,info,title,path})=>{
                        return (
                          <Card className="programs-program" key={id}>
                             <span className='icon'>{icon}</span>
                             <h4>{title}</h4>
                             <small>{info}</small>
                             <Link to={path} className="btn-primary btn btn-sm">learn more <AiFillCaretRight/></Link>
                          </Card>
                        )
                    })
                 }
                 </div>
            </div>
        </section>
    </>
  )
}

export default Programs