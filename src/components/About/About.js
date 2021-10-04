import React from 'react';
import img from '../images/about.jpg'
import './About.css'

const About = () => {
    return (
        <div className="about">

            {/* learn something section */}

            <div className="learn row container mx-auto">


                <div className=" col-md-6">
                    <div className="learn-details">
                        <h2>Always try to learn something new</h2>
                        <p>We are offering the most effective Finance course that can help you in the career and personal life</p>
                    </div>
                </div>
                <div className="learn-img col-md-6">
                    <img src={img} alt="" />
                </div>
            </div>

            {/* mission and vision */}
            
            <div className="mt-5">
                <h2 className="text-secondary fw-bold text-center mb-5 ">About us</h2>
                <div className="row container mx-auto">
                    <div className="background col-md-6">
                        <h4 className="about-heading">Background</h4>
                        <p><strong>Financiio </strong>is an American massive open online course (MOOC) provider aimed at professional adults and students. It was founded in May 2010 by Eren Bali, Gagan Biyani, and Oktay Caglar.As of June of 2021, the platform has more than 44 million students, 183,000 courses and 65,000 instructors teaching courses in 75 languages. There have been over 594 million course enrollmentsStudents take courses largely as a means of improving job-related skills. Some courses generate credit toward technical certification. Udemy has made a special effort to attract corporate trainers seeking to create coursework for employees of their company.</p>
                    </div>
                    <div className="vission-mission col-md-6">
                        <h4 className="about-heading">Mission and Vission</h4>
                        <p>Financiio is a collaborative community of higher education leaders and innovators, dedicated to advancing quality digital teaching and learning experiences designed to reach and engage the modern learner – anyone, anywhere, anytime. Financiio inspires innovation and quality through an extensive set of resources, including best-practice publications, quality benchmarking, leading-edge instruction, community-driven conferences, practitioner-based and empirical research, and expert guidance. The growing Financiio community includes faculty members, administrators, trainers, instructional designers, and other learning professionals, as well as educational institutions, professional societies, and corporate enterprises. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;