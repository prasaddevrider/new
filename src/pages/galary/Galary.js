import React from 'react'
import "./Galary.css"
import Header from "../../components/Header"
import headerimg from "../../images/img5.jpg"
function Galary() {
  const galaryLength=14;
const images=[];
for(let i=1;i<galaryLength;i++){
  images.push(require(`../../images/demo${i}.webp`))
}



  return (
   <>
   <Header title="our galary" image={headerimg}s >
    Lorem ipsum dolor sit, amet consectetur 
    adipisicing elit. Iure necessitatibus
     possimus quis rerum quasi eos delectus 
     recusandae odio temporibus eaque?
   </Header>
   <section className="galary">
    <div className="container galary-container">
      {
        images.map((image,index)=>{
          return(
            <article key={index} >
              <img src={image} alt={`image ${index+1}`} />
            </article>
          )
        })
      }
    </div>
   </section>

   </>
  )
}

export default Galary