import React from 'react';
import './AboutList.css';
import imgAbout from '../assets/about-img.jpg';
import fb from '../assets/facebook.png';
import pinterest from '../assets/pinterest.png';
import twitter from '../assets/twitter.png';

const AboutList = () => {
  return (
    <div className="main-container">
        <div className="main-card-container">
            <div className="img-container">
                <div className="overlay">
                </div>
                    <img src= {imgAbout} alt="" />
                <div className="icons">
                    <img src= {fb} alt=""/>
                    <img src= {twitter} alt="" />
                    <img src= {pinterest} alt="" />
                </div>
            </div>
            <div className="content-container">
                <h6>Benjamin Evalent</h6>
                <span>CEO-Founder</span>
            </div>
        </div>
    </div>
  )
}

export default AboutList
