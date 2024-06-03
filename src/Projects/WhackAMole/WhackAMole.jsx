import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './WhackAMole.css';

const WhackAMole = () => {
    const [moles, setMoles] = useState(Array(9).fill(false));
    const [score, setScore] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const newMoles = Array(9).fill(false);
            const randomIndex = Math.floor(Math.random() * 9);
            newMoles[randomIndex] = true;
            setMoles(newMoles);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const whackMole = (index) => {
        if (moles[index]) {
            setScore(score + 1);
            const newMoles = [...moles];
            newMoles[index] = false;
            setMoles(newMoles);
        }
    };

    return (
        <div className="whack-a-mole-background">
            <div className="whack-a-mole-container">
                <Link to="/" className="home-link">Home</Link>
                <div className="game-area">
                    <div className="score">Score: {score}</div>
                    <div className="mole-grid">
                        {moles.map((isMole, index) => (
                            <div key={index} className="hole" onClick={() => whackMole(index)}>
                                {isMole && <div className="mole"></div>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhackAMole;
