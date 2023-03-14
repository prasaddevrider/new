import React, { useState } from 'react'
import SectionHead from './SectionHead'
import {ImQuotesLeft} from "react-icons/im"
import { testmonalis } from '../Data'
import Card from '../UI/Card'
import {IoIosArrowDropleftCircle,IoIosArrowDroprightCircle} from "react-icons/io"


const Testmonalis = () => {
    const [index,setIndex]=useState(0);
    const {name,quote,job,avater}=testmonalis[index];
   const prevTestHandelar=()=>{
    setIndex(prev=>prev-1);
    if(index <=0){
        setIndex(testmonalis.length-1);
   }
}
   const nextTestHandelar=()=>{
     setIndex(prev=>prev+1);
     if(index >=testmonalis.length-1){
        setIndex(0);
     }
   }
  return (
    <>
   <section className="testimonals">
    <div className="container testimonals-container">
        <SectionHead icon={<ImQuotesLeft/>} title="testimonals" className="test-head" />
        <Card className="testimonal">
       <div className="testmonal-avater">
        <img src={avater} alt={name} className="test-img" />
       </div>
       <p className="testmonala-quote">
        {`"${quote}"`}
       </p>
       <h5 className='test-name'>{name}</h5>
       <small className='testmono-title'>{job}</small>
       <div className="test-btn-container">
        <button className="btn-test" onClick={prevTestHandelar}>
            <IoIosArrowDropleftCircle/>
        </button>
        <button className="btn-test" onClick={nextTestHandelar}>
            <IoIosArrowDroprightCircle/>
        </button>
       </div>
        </Card>

    </div>
   </section>
    </>
  )
}

export default Testmonalis