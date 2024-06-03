import React from 'react';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import fallingStars from '../Images/falling-star.png';
import memoryIcon from '../Images/memory-loss.png';
import whackAMole from '../Images/whack-a-mole.png';
import './Projects.css';

const projects = [
    { title: 'Falling Stars Game', link: '/projects/fallingStars', icon: fallingStars },
    { title: 'Memory Game', link: 'projects/memoryGame', icon: memoryIcon },
    { title: 'Whack-A-Mole Game', link: 'projects/whackAMole', icon: whackAMole },
];

export default function ProjectsRightSide() {
    return (
        <div className="projects-container">
            <div className="projects-card">
                <div className="projects-header">
                    <Typography variant="h4" className="projects-title">PROJECTS</Typography>
                </div>
                <div className="projects-divider"></div>
                <div className="projects-list">
                    {projects.map((project, index) => (
                        <Card key={index} className="project-card">
                            <CardActionArea component={Link} to={project.link} className="project-action-area">
                                <CardContent className="project-card-content">
                                    <Typography variant="h6" className="project-title">{project.title}</Typography>
                                    <img src={project.icon} alt={project.title} className="project-icon" />
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
