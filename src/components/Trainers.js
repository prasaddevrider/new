import React from 'react'
import Card from '../UI/Card'

const Trainers = ({image,name,job,socials}) => {
  return (
    <>
   <Card className="trainer-card">
    <div className="trainer-img">
    
        <img src={image} alt={name} />
    </div>
    <h3>{name}</h3>
    <p>{job}</p>
    <div className="trainer-social">
        {
            socials.map(({icon,link},index)=>{
                return(
                    <a href={link} key={index} target="_blank" rel='noreffer noopener'>{icon}</a>
                )
            })
        }
    </div>
   </Card>
    </>
  )
}

export default Trainers