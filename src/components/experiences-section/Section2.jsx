import React from 'react'
import './Section2.css';
import icon from "./apple.svg";
import icon1 from "./google.svg";
import icon2 from "./youtube.svg";
function Section2() {
    return (
        <div className='section2'>
            <div className='title'>
                <span className='h3'>My</span> &nbsp; &nbsp; <span className='bold'>Experiences</span>
            </div>
            <div className='experiences'>

                <div className='section-content'>
                    <div className='heading'>
                        <div className='left'>
                            <img src={icon1} alt="icon" className="section2-icon" />
                            <h4>Lead Software Engineer at Google</h4>
                        </div>
                        <div className='right'>
                            <p>November 2019 - present</p>
                        </div>
                    </div>
                    <div className='description'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard  dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
                    </div>
                </div>
                <div className='section-content colored'>
                    <div className='heading'>
                        <div className='left'>
                            <img src={icon2} alt="icon" className="section2-icon" />
                            <h4>Software Engineer at Youtube</h4>
                        </div>
                        <div className='right'>
                            <p>Jan 2017 - Oct 2019</p>
                        </div>
                    </div>
                    <div className='description'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard  dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
                    </div>
                </div>
                <div className='section-content'>
                    <div className='heading'>
                        <div className='left'>
                            <img src={icon} alt="icon" className="section2-icon" />
                            <h4>Junior Software Engineer at Apple</h4>
                        </div>
                        <div className='right'>
                            <p>Jan 2016 - Dec 2017</p>
                        </div>
                    </div>
                    <div className='description'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard  dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Section2