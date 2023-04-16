import React from 'react'
import {Navbar} from './Navbar'
import {FiArrowRight} from 'react-icons/fi'

export const Home = () => {
  return (
    <div className='home-container'>
        <Navbar/>
        <div className="home-banner-container">
          <div className="home-bannerImage-container">
            <img src='/assets/home-banner-background.png' alt="" />
          </div>
          <div className="home-text-section">
            <h1 className="primary-heading">
              Your favorite Food <br /> Delivered Hot & Fresh
            </h1>
            <p className="primary-text">Healthy switcher chefs do all the prep work, like peeding, chopping & marinating, so you can cooka fresh food.</p>
            <button className="secondary-button">
              Order Now <FiArrowRight />
            </button>
            </div>
            <div className="home-image-container">
              <img src='/assets/home-banner-image.png' alt="" />
            </div>
          
        </div>
    </div>
  )
}