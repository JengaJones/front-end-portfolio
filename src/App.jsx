import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Typography } from '@mui/material';
import Heading from './Heading/Heading.jsx';
import AboutMe from './AboutMe/AboutMe.jsx';
import Projects from './Projects/Projects.jsx';
import ProjectsRightSide from './Projects/ProjectsRightSide.jsx';
import Skills from './Skills/Skills.jsx';
import Calculator from './Projects/Calculator/Calculator.jsx';
import ToDoList from './Projects/To-Do List/ToDoList.jsx';
import NoteTakingApp from './Projects/NoteTaking/NoteTakingApp.jsx';
import FallingStarsGame from './Projects/FallingStars/FallingStarsGame.jsx';
import MemoryGame from './Projects/Memory/MemoryGame.jsx';
import WhackAMole from './Projects/WhackAMole/WhackAMole.jsx';

import './App.css';


function App() {
    const inspirationalQuote = "'The best way to predict the future is to invent it' - Alan Kay";
    const name = "Tyler Will";

    return (
        <Router basename="/front-end-portfolio">
            <div className="main-container">
                <Routes>
                    <Route path="/" element={
                        <>
                        <div className="App">
                            <Heading />
                        </div>

                        <div className="about-me-container">
                            <AboutMe />
                        </div>

                        <div className="projects-left-container">
                            <Projects />
                        </div>

                        <div className="skills-container">
                            <Skills />
                        </div>

                        <div className="projects-right-container">
                            <ProjectsRightSide />
                        </div>

                        <div className="center-title">
                            <Typography className="center-name">
                                {name}
                            </Typography>
                            <Typography variant="subtitle1" className="center-subtitle">
                                {inspirationalQuote}
                            </Typography>
                        </div>
                        </>
                    } />

                    {/* Left Side */}
                    <Route path="/projects/calculator" element={<Calculator />} />
                    <Route path="/projects/toDoList" element={<ToDoList />} />
                    <Route path="/projects/noteTakingApp" element={<NoteTakingApp />} />

                    {/* Right Side */}
                    <Route path="/projects/fallingStars" element={<FallingStarsGame />} />
                    <Route path="/projects/memoryGame" element={<MemoryGame />} />
                    <Route path="/projects/whackAMole" element={<WhackAMole />} />

                    {/* Resume */}
                    <Route path="/resume" element={<Resume />} />

                </Routes>
            </div>
        </Router>
    );
}

export default App;

import Resume from './Heading/Resume.jsx';