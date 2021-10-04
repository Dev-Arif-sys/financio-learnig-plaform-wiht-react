import React from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';
import UseCourse from '../UseCourse';

const HomeService = () => {
    let [courses]=UseCourse()
    courses.length=6;
    console.log(courses);
    return (
        <div className="w-75 mx-auto my-5 ">
            <h2 className="text-secondary fw-bold text-center mb-4">Our Courses</h2>
            <Row xs={1} md={3}  className="g-4 justify-content-center ms-5 ">
            {
                courses.map(course=> <Course 
                    course={course}
                    key={course.id}
                    ></Course>)
            }
            </Row>
        </div>
    );
};

export default HomeService;