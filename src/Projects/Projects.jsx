import React from 'react';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import calculatorIcon from '../Images/calculator.png';
import checkIcon from '../Images/check.png';
import notesIcon from '../Images/notebook.png';
import './Projects.css';

const projects = [
    { title: 'Calculator', link: '/projects/calculator', icon: calculatorIcon },
    { title: 'To-Do List', link: 'projects/toDoList', icon: checkIcon },
    { title: 'Note Taking App', link: 'projects/noteTakingApp', icon: notesIcon },
];

export default function Projects() {
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
