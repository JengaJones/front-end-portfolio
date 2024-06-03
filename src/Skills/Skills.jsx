import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import JavascriptIcon from '@mui/icons-material/Javascript';
import CloudIcon from '@mui/icons-material/Cloud';
import StorageIcon from '@mui/icons-material/Storage';
import TagIcon from '@mui/icons-material/Tag';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import WebIcon from '@mui/icons-material/Web';
import BadgeIcon from '@mui/icons-material/Badge';
import DescriptionIcon from '@mui/icons-material/Description';
import SettingsIcon from '@mui/icons-material/Settings';
import ApiIcon from '@mui/icons-material/Api';
import './Skills.css';

const skills = [
    { name: 'JavaScript', icon: <JavascriptIcon /> },
    { name: 'HTML', icon: <HtmlIcon /> },
    { name: 'CSS', icon: <CssIcon /> },
    { name: 'TypeScript', icon: <DescriptionIcon /> },
    { name: 'Web Development', icon: <WebIcon /> },
    { name: 'UI Development', icon: <BadgeIcon /> },
    { name: 'React', icon: <ApiIcon /> },
    { name: 'Azure', icon: <CloudIcon /> },
    { name: 'Pipelines', icon: <StorageIcon /> },
    { name: '.YML', icon: <SettingsIcon /> },
    { name: 'C#', icon: <TagIcon /> },
    { name: 'Java', icon: <CodeIcon /> }
];

export default function Skills() {
    const [displayedText, setDisplayedText] = useState("");
    const [typingIndex, setTypingIndex] = useState(0);
    const [hoveredSkill, setHoveredSkill] = useState(null);
    const skillsTitle = "Skills";

    useEffect(() => {
        const joinedText = skills.map(skill => skill.name).join(', ');
        if (typingIndex < joinedText.length) {
            const timer = setTimeout(() => {
                setDisplayedText(joinedText.slice(0, typingIndex + 1));
                setTypingIndex(typingIndex + 1);
            }, 50);
            return () => clearTimeout(timer);
        }
    }, [typingIndex]);

    const handleMouseEnter = (skillName) => {
        setHoveredSkill(skillName);
    };

    const handleMouseLeave = () => {
        setHoveredSkill(null);
    };

    const getHighlightedText = (text) => {
        return text.split(', ').map((skill, index) => (
            <span
                key={index}
                className={hoveredSkill === skill ? 'highlighted-skill' : ''}
            >
                {skill}{index < text.split(', ').length - 1 && ', '}
            </span>
        ));
    };

    return (
        <div className="skills-container">
            <div className="skills-card">
                <div className="skills-header">
                    <Typography variant="h4" className="skills-title">{skillsTitle}</Typography>
                </div>
                <div className="skills-list-container">
                    <Typography variant="body1" className="skill-name">
                        {getHighlightedText(displayedText)}
                    </Typography>
                </div>
                <div className="skills-icons">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="skill-icon-container"
                            onMouseEnter={() => handleMouseEnter(skill.name)}
                            onMouseLeave={handleMouseLeave}
                        >
                            {skill.icon}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
