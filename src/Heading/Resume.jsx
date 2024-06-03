import React from 'react';
import { Link } from 'react-router-dom';
import './Resume.css';
import resume from '../Images/Resume.pdf';

const Resume = () => {
    return (
        <div className="resume-container">
            <Link to="/" className="home-button">Home</Link>
            <div className="pdf-container">
                <embed src={resume} type="application/pdf" className="pdf-embed" />
            </div>
        </div>
    );
};

export default Resume;
