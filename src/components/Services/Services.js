import React from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';
import UseCourse from '../UseCourse';
import './Service.css'

const Services = () => {
    const [courses]=UseCourse([])
    return (
        <div className="service">
        <div className="row container mx-auto my-4">
             <h2 className="text-secondary fw-bold text-center mb-4">Our Courses</h2>
           <Row xs={1} md={3} className="g-4">
               {
                courses.map(course=><Course 
                   
                    course={course}
                    key={course.id}
                    ></Course>)
               }
            </Row>
        </div>
        </div>
    );
};

export default Services;