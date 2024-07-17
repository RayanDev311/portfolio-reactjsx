import React from 'react'
import './Section1.css';
import icon from "./icon-git.svg";
import icon1 from "./icon-javascript.svg";
import icon2 from "./icon-nest.svg";
import icon3 from "./icon-socket.svg";
import icon4 from "./icon-sass.svg";
import icon5 from "./icon-storybook.svg";



const Section1 = () => {
  return (
    <section className='container' id='section1'>
        <div className='title'>
          <span className='h3'>My</span> &nbsp; &nbsp; <span className='bold'>Skills</span>
        </div>
        <div className='row'>
            <div className='skill'>
              <img src={icon} alt="icon" className="section1-icon" />
              <h5>Git</h5>
            </div>
            <div className='skill'>
              <img src={icon1} alt="icon" className="section1-icon" />
              <h5>Javascript</h5>
            </div>
            <div className='skill'>
              <img src={icon2} alt="icon" className="section1-icon" />
              <h5>Nestjs</h5>
            </div>
            <div className='skill'>
              <img src={icon3} alt="icon" className="section1-icon" />
              <h5>Socket.io</h5>
            </div>
            <div className='skill'>
              <img src={icon4} alt="icon" className="section1-icon" />
              <h5>Sass/Css</h5>
            </div>
            <div className='skill'>
              <img src={icon5} alt="icon" className="section1-icon" />
              <h5>Storybook</h5>
            </div>
            <div className='skill'>
              <img src={icon3} alt="icon" className="section1-icon" />
              <h5>Socket.io</h5>
            </div>
            <div className='skill'>
              <img src={icon1} alt="icon" className="section1-icon" />
              <h5>Javascript</h5>
            </div>
            <div className='skill'>
              <img src={icon4} alt="icon" className="section1-icon" />
              <h5>Sass/Css</h5>
            </div>
            <div className='skill'>
              <img src={icon2} alt="icon" className="section1-icon" />
              <h5>Nestjs</h5>
            </div>
        </div>
    </section>
  )
}

export default Section1