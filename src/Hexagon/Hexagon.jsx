import React from 'react';
import './Hexagon.css';
import hexagonImage from './Hexagon.png';

export default function Hexagon() {
    return (
        <div className="hexagon">
            <img src={hexagonImage} alt="Hexagon Logo" className="hexagon-image" />
        </div>
    );
}
