import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FallingStarsGame.css';

const FallingStarsGame = () => {
    const [basketPosition, setBasketPosition] = useState(50);
    const [stars, setStars] = useState([]);
    const [score, setScore] = useState(0);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowLeft' && basketPosition > 0) {
                setBasketPosition(basketPosition - 10);
            } else if (event.key === 'ArrowRight' && basketPosition < 90) {
                setBasketPosition(basketPosition + 10);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [basketPosition]);

    useEffect(() => {
        const interval = setInterval(() => {
            setStars((prevStars) => [
                ...prevStars,
                { id: Date.now(), position: Math.floor(Math.random() * 90), top: 0 }
            ]);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setStars((prevStars) =>
                prevStars.map((star) => ({
                    ...star,
                    top: star.top + 5
                }))
            );

            setStars((prevStars) => {
                const newStars = prevStars.filter((star) => star.top < 90);
                const caughtStars = prevStars.filter((star) => star.top >= 90 && Math.abs(star.position - basketPosition) < 10);
                setScore((prevScore) => prevScore + caughtStars.length);
                return newStars;
            });
        }, 200);

        return () => clearInterval(interval);
    }, [basketPosition]);

    return (
        <div className="falling-stars-game-background">
            <div className="falling-stars-game-container">
                <Link to="/" className="home-link">Home</Link>
                <div className="game-area">
                    <div className="basket" style={{ left: `${basketPosition}%` }}></div>
                    {stars.map((star) => (
                        <div
                            key={star.id}
                            className="star"
                            style={{ left: `${star.position}%`, top: `${star.top}%` }}
                        ></div>
                    ))}
                    <div className="score">Score: {score}</div>
                </div>
            </div>
        </div>
    );
};

export default FallingStarsGame;
