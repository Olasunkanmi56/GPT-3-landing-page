import React from 'react'
import Feature from '../../components/feature/Feature'
import './features.css'
const featureData = [
   {
    title: 'Improving end distrusts instantly',
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, nisi."
   },
   {
    title: 'Improving end distrusts instantly',
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, nisi."
   },
   {
    title: 'Improving end distrusts instantly',
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, nisi."
   },
   {
    title: 'Improving end distrusts instantly',
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, nisi."
   }

]

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id='features'>
       <div className="gpt3__features-heading">
        <h1 className='gradient__text'>
          The Future is Now and You Just Need To Realise it. Step into Future Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
       </div>
       <div className="gpt3__features-container">
          {featureData.map((item, index) => (
             <Feature title={item.title} text={item.text}  key={item.title + index}/>   
          ))}
       </div>
    </div>
  )
}

export default Features