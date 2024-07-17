import React from 'react'
import './Section3.css';
import image from "./image 771.svg";
import image1 from "./image 770.svg";
import image2 from "./image 770 (1).svg";
import icon from "./Read More.svg";



function Section3() {
    return (
        <div className='section3' id='section3'>
            <div className='title'>
                <span className='h3'>My</span> &nbsp; &nbsp; <span className='bold'>Projects</span>
            </div>
            <div className='row'>
                <div className='img'>
                    <img src={image} alt="icon" className="section3-img" />
                </div>
                <div className='content'>
                    <span className='bold'>01</span>
                    <h2>Crypto Screener Application</h2>
                    <p>I am Fadhil Ishola Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
                    <a href='#'>
                        <img src={icon} alt="icon" />
                    </a>
                </div>
            </div>
            <div className='row row-reverse'>
                <div className='img'>
                    <img src={image1} alt="icon" className="section3-img" />
                </div>
                <div className='content'>
                    <span className='bold'>02</span>
                    <h2>Euphoria - Ecommerce (Apparels) Website Template</h2>
                    <p>I am Fadhil Ishola Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
                    <a href='#'>
                        <img src={icon} alt="icon" />
                    </a>
                </div>
            </div>
            <div className='row'>
                <div className='img'>
                    <img src={image2} alt="icon" className="section3-img" />
                </div>
                <div className='content'>
                    <span className='bold'>03</span>
                    <h2>Blog Website Template</h2>
                    <p>I am Fadhil Ishola Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
                    <a href='#'>
                        <img src={icon} alt="icon" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Section3