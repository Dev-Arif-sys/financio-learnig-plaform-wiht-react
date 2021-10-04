import React from 'react';
import './NotFound.css'
import img from '../images/404 not found.svg'

const NotFound = () => {
    return (
        <div className="notFound">
            <div className="text-center"><img src={img} alt="" /></div>
            <h1 className="my-4 text-warning text-center"> 404 page is not found</h1>
        </div>
    );
};

export default NotFound;