import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer">
                <div className="container">
                <div className=" row justify-content-center">
                   <div className="col-md-3">
                       <div>
                           <h3 className="fs-3 fw-bold text-white ">Finan<span className="logo-portion">ciio</span></h3>
                           <p className="text-white">to help improve your financial understanding, no matter where life takes you and to help boost your confidence in understanding your personal finances</p>
                       </div>
                       <div className="social-link">
            
                       </div>
                       <div>
                           <small className="text-white">copyright &copy;2021Financiio</small>
                       </div>
                   </div>
                   {/* our presence */}
                   <div className="text-white presence text-left col-md-3">
 
                       <ul>
                       <h5>Our Presence</h5>
                           <li>
                               <a href="">Affiliate</a>
            
                           </li>
                           <li>
                               <a href="">Partners</a>
                           </li>
                           <li>
                               <a href="">Reviews</a>
                           </li>
                           <li>
                               <a href="">Blogs</a>
                           </li>
                           <li>
                               <a href="">Newsletter</a>
                           </li>
                       </ul>
            
            
                   </div>
            
                {/* our presence */}
                <div className="text-white presence text-left col-md-3">
                
                <ul>
                <h5>Resources</h5>
                           <li>
                               <a href="">Resourse</a>
            
                           </li>
                           <li>
                               <a href="">Privacy Polcy</a>
                           </li>
                           <li>
                               <a href="">Service Area</a>
                           </li>
                           <li>
                               <a href="">Documents</a>
                           </li>
                           <li>
                               <a href="">How it works</a>
                           </li>
                       </ul>
                </div>
            
               {/* our presence */}
                <div className="text-white presence text-left col-md-3">
               
                <ul>
                <h5>Quick Links</h5>
                           <li>
                               <a href="">Home</a>
            
                           </li>
                           <li>
                               <a href="">About us</a>
                           </li>
                           <li>
                               <a href="">Services</a>
                           </li>
                           <li>
                               <a href="">Blogs</a>
                           </li>
                           <li>
                               <a href="">Contact</a>
                           </li>
                       </ul>
                </div>
            
                </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;