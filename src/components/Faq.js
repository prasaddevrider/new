import React, { useState } from 'react'

import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'

const Faq = ({quection,answer}) => {
    const [isAnswerShown, setIsAnswerShown]=useState(false)
  return (
    <>
        <article className='faq' onClick={()=> setIsAnswerShown(prev=>!prev)
        }>
            <div>
                <h4>{quection}</h4>
                <button className="faq-icon">
             {
                isAnswerShown ?<AiOutlineMinus/>:<AiOutlinePlus/>
             }
                </button>
            </div>
         {
            isAnswerShown && <p>{answer}</p>
         }
        </article>
    </>
  )
}

export default Faq