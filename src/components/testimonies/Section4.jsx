import React from 'react'
import './Section4.css';
import image from "./Frame 18.svg";
import image1 from "./Frame 18 (1).svg";


const Section4 = () => {
    return (
        <div className='section4'>
            <div className='title'>
                <span className='h3'>My</span> &nbsp; &nbsp; <span className='bold'>Testimonial</span>
            </div>
            <div className='section-container'>
                <div className='testimony'>
                    <div className='img'>
                        <img src={image1} alt="icon" className="section3-img" />
                    </div>
                    <div className='description'>
                        <p>I recently had to jump on 10+ different calls across eight different countries to find the right owner.</p>
                        <hr></hr> <h5>Flora sheen</h5>
                        <p>Designer</p>
                    </div>
                </div>
                <div className='testimony dark'>
                    <div className='img'>
                        <img src={image} alt="icon" className="section3-img" />
                    </div>
                    <div className='description'>
                        <p>I recently had to jump on 10+ different calls across eight different countries to find the right owner.</p>
                        <hr></hr> <h5>Evren Shah</h5>
                        <p>Designer</p>
                    </div>
                </div>
                <div className='testimony'>
                    <div className='img'>
                        <img src={image1} alt="icon" className="section3-img" />
                    </div>
                    <div className='description'>
                        <p>I recently had to jump on 10+ different calls across eight different countries to find the right owner.</p>
                        <hr></hr> <h5>Flora sheen</h5>
                        <p>Designer</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Section4