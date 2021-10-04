import React from 'react';
import './Hero.css'
import Img from '../images/undraw_Finance_re_gnv2 (1).svg'

const Hero = () => {
    return (
        <div className="hero" >
        <div className="container row pt-5 align-items-center justify-content-center">
            <div className="col-md-6">
             <h1 className="hero-header">Your Personal Study of Finance Starts here</h1>
             <h5 className="hero-subHeader">Register now for 30% off</h5>
             <button  className="forwardBtn"><span>Register</span></button>
            </div>
            <div  className="col-md-5 hero-img ">
            <img  src={Img} alt="" />
            </div>
            
        </div>
        </div>
    );
};

export default Hero;