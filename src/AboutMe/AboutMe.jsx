import React from 'react';
import { Typography } from '@mui/material';
import './AboutMe.css';
import Profile from '../Images/Profile.png';

export default function AboutMe() {
    const aboutMeDescription = `Hello! My name is Tyler, and I am a dedicated and passionate Full-Stack Developer.
    I have experience working for General Motors as a QA Software Developer in Manufacturing and as a Full-Stack Developer within the Motorsports organization. 
    In this role, I contributed to the development of a Race Vehicle Simulation application in a fast-paced environment.`;

    const aboutMeOutsideOfWork = `Outside of work, I enjoy spending time with my family, exploring game development with Godot and Unreal Engine, 
    writing, and playing outdoors with my dogs.`;

    const aboutMeTitle = "ABOUT ME";

    return (
        <div className="about-me-container">
            <div className="about-me-card">
                <div className="about-me-header">
                    <Typography variant="h4" className="about-me-title">{aboutMeTitle}</Typography>
                </div>
                <img src={Profile} alt="Avatar" className="about-me-avatar" />
                <div className="about-me-content">
                    <Typography variant="body1" className="about-me-description">{aboutMeDescription}</Typography>
                    <Typography variant="body1" className="about-me-description">{aboutMeOutsideOfWork}</Typography>
                </div>
            </div>
        </div>
    );
}
