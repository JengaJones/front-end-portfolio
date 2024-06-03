import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MemoryGame.css';

const initialCards = [
    { id: 1, name: 'A', isFlipped: false, isMatched: false },
    { id: 2, name: 'B', isFlipped: false, isMatched: false },
    { id: 3, name: 'C', isFlipped: false, isMatched: false },
    { id: 4, name: 'D', isFlipped: false, isMatched: false },
    { id: 5, name: 'E', isFlipped: false, isMatched: false },
    { id: 6, name: 'F', isFlipped: false, isMatched: false },
    { id: 7, name: 'G', isFlipped: false, isMatched: false },
    { id: 8, name: 'H', isFlipped: false, isMatched: false },
    { id: 9, name: 'A', isFlipped: false, isMatched: false },
    { id: 10, name: 'B', isFlipped: false, isMatched: false },
    { id: 11, name: 'C', isFlipped: false, isMatched: false },
    { id: 12, name: 'D', isFlipped: false, isMatched: false },
    { id: 13, name: 'E', isFlipped: false, isMatched: false },
    { id: 14, name: 'F', isFlipped: false, isMatched: false },
    { id: 15, name: 'G', isFlipped: false, isMatched: false },
    { id: 16, name: 'H', isFlipped: false, isMatched: false },
];

const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
};

const MemoryGame = () => {
    const [cards, setCards] = useState(shuffleArray([...initialCards]));
    const [firstCard, setFirstCard] = useState(null);
    const [secondCard, setSecondCard] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [score, setScore] = useState(0);

    const handleCardClick = (index) => {
        if (isProcessing) return;

        const newCards = [...cards];
        if (!newCards[index].isFlipped) {
            newCards[index].isFlipped = true;
            setCards(newCards);

            if (!firstCard) {
                setFirstCard({ ...newCards[index], index });
            } else if (!secondCard) {
                setSecondCard({ ...newCards[index], index });
                setIsProcessing(true);
                setTimeout(() => {
                    processMatch({ ...newCards[index], index });
                }, 1000);
            }
        }
    };

    const processMatch = (secondCard) => {
        const newCards = [...cards];
        if (firstCard.name === secondCard.name) {
            newCards[firstCard.index].isMatched = true;
            newCards[secondCard.index].isMatched = true;
            setScore(score + 1);
        } else {
            newCards[firstCard.index].isFlipped = false;
            newCards[secondCard.index].isFlipped = false;
        }
        setCards(newCards);
        setFirstCard(null);
        setSecondCard(null);
        setIsProcessing(false);
    };

    return (
        <div className="memory-game-background">
            <Link to="/" className="home-link">Home</Link>
            <div className="memory-game-container">
                <div className="memory-game">
                    <div className="card-grid">
                    <div className="score">Score: {score}</div>
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className={`card ${card.isFlipped ? 'flipped' : ''}`}
                                onClick={() => !card.isFlipped && !card.isMatched && handleCardClick(index)}
                            >
                                <div className="card-inner">
                                    <div className="card-front"></div>
                                    <div className="card-back">{card.name}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemoryGame;
