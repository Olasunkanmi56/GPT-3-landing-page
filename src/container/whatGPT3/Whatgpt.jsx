import React from 'react'
import Feature from '../../components/feature/Feature'
import './whatGPT.css'


const Whatgpt = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id='wgpt3'>
       <div className="gpt3__whatgpt3-feature">
        <Feature  title= "What is GPT-3"  text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam temporibus facere cupiditate ut maiores! Consequatur odio nulla autem fuga, labore, possimus accusamus nobis"/>
       </div>
       <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
       </div>
       <div className="gpt3__whatgpt3-container">
        <Feature title= "Chatbots"  text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam temporibus facere cupiditate ut maiores! Consequatur odio nulla autem fuga, labore, possimus accusamus nobis" />
        <Feature title= "Knowledgebase"  text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam temporibus facere cupiditate ut maiores! Consequatur odio nulla autem fuga, labore, possimus accusamus nobis"  />
        <Feature title= "Education"  text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam temporibus facere cupiditate ut maiores! Consequatur odio nulla autem fuga, labore, possimus accusamus nobis" />
       </div>
    </div>
  )
}

export default Whatgpt