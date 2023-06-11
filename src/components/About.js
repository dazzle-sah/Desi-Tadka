import React from 'react';
import AboutImg from "../assets/images/about.jpg";
const About = () => {
  return (
    <>
      <section className='about' id='about'>
        <h1 className='heading'>
            <span>About</span> us
        </h1>
        <div className='row'>
            <div className='image'>
                <img src={AboutImg} alt=''/>
            </div>
            <div className='content'>
                <h3>Our Special</h3>
                <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                <p>ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg</p>
                <a href='#' className='btn'>Learn More</a>
            </div>
        </div>
      </section>
    </>
  );
};

export default About
