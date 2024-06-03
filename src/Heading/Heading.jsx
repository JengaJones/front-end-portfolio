import hexagonLogo from '../Hexagon/Hexagon.png';
import React from 'react';
import { Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './Heading.css';

export default function Heading() {
    return (
        <div className="header">
            <Toolbar className="toolbar">
                <div className="hexagon-icon">
                    <img src={hexagonLogo} alt="Icon" className="hexagon-image" />
                </div>
                <Box className="menu-items">
                    <Button color="inherit" component="a" href="https://www.linkedin.com/in/tyler-will-57029916a/" target="_blank" rel="noopener noreferrer">LinkedIn</Button>
                    <Button color="inherit" component="a" href="https://github.com/JengaJones" target="_blank" rel="noopener noreferrer">GitHub</Button>
                    <Button color="inherit" component={Link} to="/resume">Resume</Button>
                </Box>
            </Toolbar>
            <div className="underline"></div>
        </div>
    );
}
