import React from 'react'
import './About.css';
import image from "./about-img.svg";
import image1 from "./about-img-mob.svg";



const About = () => {
    return (
        <div className='about' id='about'>
            <div className='img'>
                <img src={image} alt="icon" className="about-img" />
                <img src={image1} alt="icon" className="about-img-mob" />
            </div>
            <div className='content'>
                <span className='h3'>About</span> &nbsp; &nbsp; <span className='bold'>Me</span>
                <p>I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.</p>
                <p>I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way.Now, in my early thirties, 7 years after starting my web development journey;</p>
                <p>When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwind css, Supabase and much more.</p>
                <p>You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.</p>
            </div>
        </div>
    )
}

export default About