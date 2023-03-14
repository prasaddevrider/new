
import "./Services.css"

    import React from 'react'
import Header from "../../components/Header"

import img from "../../images/plan1.webp"


import Card from "../../UI/Card"
function SignUp() {
  return (
    <>
    <Header title="our galary" image={img}s >
    Lorem ipsum dolor sit, amet consectetur 
    adipisicing elit. Iure necessitatibus
     possimus quis rerum quasi eos delectus 
     recusandae odio temporibus eaque?
   </Header>
    
    <Card className="head">
        <div className="container container-si">
        
      
           
                <div className="login-card signup-card ">
                    <h3 className="text-center ">sign up</h3>
                    <form action="" className="d-flex flex-column gap-15 form-tap">
                       <input 
                       type="text" name="name" id="" placeholder="Name" className="form-control"  autoComplete="off"
                       />
                       <input 
                      type="email" name="email" id="" placeholder="Email" className="form-control"  autoComplete="off"
                       />
                       
                       <input 
                     type="tel" name="mobile" id="" placeholder="Mobile Number" className="form-control"  autoComplete="off"
                       />
                         
                         <input 
                     type="password" name="password" id="" placeholder="Password" className="form-control"  autoComplete="off"
                       />
                       
                  
                        
                        <div className="d-flex justify-content-center align-items-center">
                          <button className="btn btn-primary border-0 mb-3">
                            Sign Up
                          </button>
                          
                  </div>
                    </form>
                </div>
            </div>
        
      
    </Card>
    </>
  )
}

export default SignUp
  

