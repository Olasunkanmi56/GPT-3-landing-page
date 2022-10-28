import React from 'react'
import gpt3logo from '../../assets/logo.svg'
import './footer.css'

const Footer = () => {
  return (
   <div className="gpt3__footer section__padding">
        <div className="gpt3__footer-heading">
           <h1 className="gradient__text">
              Do you want to step to the future others
           </h1>
        </div>
        <div className="gpt3__footer-btn">
          <p>Request Early Access</p>
        </div>
        <div className="gpt3__footer-links">
          <div className="gpt3__footer-links_logo">
             <img src={gpt3logo} alt="logo" />
             <p>All right Reserved &copy;</p>
          </div>
          <div className="gpt3__footer-links_div">
            <h4>Links</h4>
            <p>Early</p>
            <p>Early</p>
            <p>Early</p>
            <p>Early</p>
            <p>Early</p>
          </div>
          <div className="gpt3__footer-links_div">
            <h4>Links</h4>
            <p>Early</p>
            <p>Early</p>
            <p>Early</p>
            <p>Early</p>
            <p>Early</p>
          </div>
          <div className="gpt3__footer-links_div">
            <h4>Links</h4>
            <p>Early</p>
            <p>Early</p>
            <p>Early</p>
            <p>Early</p>
            <p>Early</p>
          </div>
        </div>
        <div className="gpt3__footer-copyright">
          <p>&copy; 2022 GPT-3. All rights reserved</p>
        </div>
   </div>
  )
}

export default Footer