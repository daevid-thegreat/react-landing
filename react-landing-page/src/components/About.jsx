import React from 'react'
import { BsFillPlayCircleFill } from 'react-icons/bs'

const About = () => {
  return (
    <div className='about-section-container'>
        <div className="about-background-image-container">
            <img src='/assets/about-background.png' alt="" />
        </div>
        <div className="about-section-image-container">
            <img src='/assets/about-background-image.png' alt="" />
        </div>
        <div className="about-section-text-container">
            <p className="primary-subheading">
                About
            </p>
            <h1 className="primary-heading">
                Food is an important part of a balanced diet
            </h1>
            <p className="primary-text">
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor  turpis molestie duimagnis facilisis at fringilla quam.
            </p>
            <p className="primary-text">
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor  turpis molestie duimagnis facilisis at fringilla quam.
            </p>
            <div className="about-buttons-container">
                <button className='secondary-button'>Learn More</button>
                <button className='watch-video-button'> <BsFillPlayCircleFill /> Watch Video</button>
            </div>

        </div>
    </div>
  )
}

export default About