import React from 'react'
import './Contact.css';
import icon from "./Button.svg";
import icon1 from "./Button (1).svg";
import icon2 from "./Button (2).svg";
import icon3 from "./Button (3).svg";

const Contact = () => {
    return (
        <div className='contact'>
            <div className='contact-form'>
                <input type="text" id="" placeholder="Your name" />
                <input type="email" id="" placeholder="Email" />
                <input type="text" id="" placeholder="Your website (if it exists)" />
                <textarea name="message" id="" placeholder="How can I help?*"></textarea>
                <div className='actions'>
                    <button className='button'>Get In Touch</button>
                    <div className="hero-links">
                        <a href="#">
                            <img src={icon} alt="icon" className="hero-icon" />
                        </a>
                        <a href="#">
                            <img src={icon1} alt="icon" className="hero-icon" />
                        </a>
                        <a href="#">
                            <img src={icon2} alt="icon" className="hero-icon" />
                        </a>
                        <a href="#">
                            <img src={icon3} alt="icon" className="hero-icon" />
                        </a>
                    </div>
                </div>
            </div>
            <div className='contact-text'>
                <span className='bold'>Let’s</span>
                <span className='transparent'> talk</span>
                <span className='bold'> for Something special</span>
                <p>I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>
                <h5>medish776@gmail.com</h5>
                <h5>22957945511</h5>
            </div>
        </div>
    )
}

export default Contact