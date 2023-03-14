import React from 'react'

import SectionHead from './SectionHead'
import { FaQuestion } from 'react-icons/fa'
import { faqs } from '../Data'
import Faq from './Faq'

const Faqs = () => {
  return (
   <>
 <section className="faqs">
    <div className="container faq-container">
        <SectionHead icon={<FaQuestion/>} title="Faqs"/>
      <div className="faq-wrapper">
      {
        faqs.map(({id,quection,answer})=>{
            return(
                <Faq key={id} quection={quection} answer={answer} ></Faq>
            )
        })
      }

      </div>  
    </div>
 </section>
   </>
  )
}

export default Faqs