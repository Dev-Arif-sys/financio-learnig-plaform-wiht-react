import React from 'react';
import './Course.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus,faHeart } from '@fortawesome/free-solid-svg-icons'



const Course = (props) => {
    console.log(props.course)
    const cartIcon = <FontAwesomeIcon icon={faCartPlus} />
    const heartIcon = <FontAwesomeIcon icon={faHeart} />
    const {title,Image,rating,price,description,Language}=props.course
    return (
        <div>
        <div className="myCard">
         <div className="card-img">
          <img src={Image} alt="" />
          <div className="layer"></div>
         </div>
         
         <div className="card-info">
          <div className="card-icon">
              <div className=" d-flex justify-content-between mx-2">
              <p>{cartIcon}</p>
                       <p>{heartIcon}</p>
              </div>
          </div>
         <div className="text-white">
             <small>{Language}</small>
             <h5>{title}</h5>
         </div>
         <div>
             <h6 className="price">${price}</h6>
         </div>
         </div>
         
        </div>
        </div>
    );
};

export default Course;