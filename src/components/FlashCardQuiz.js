import React, { useState, useEffect } from 'react';
import FlashCard from './FlashCard';

function FlashCardQuiz() {
  const [cards, setCards] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    fetch('/questions.json')
      .then(response => response.json())
      .then(data => setCards(data.questions))
      .catch(error => console.error('Error fetching questions:', error));
  }, []);

  const nextCard = () => {
    setCurrentCardIndex((currentCardIndex + 1) % cards.length);
    setShowAnswer(false);
  };

  const previousCard = () => {
    setCurrentCardIndex((currentCardIndex - 1 + cards.length) % cards.length);
    setShowAnswer(false);
  };

  if (!cards || cards.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <FlashCard card={cards[currentCardIndex]} showAnswer={showAnswer} />
      <button onClick={previousCard}>Previous</button>
      <button onClick={() => setShowAnswer(!showAnswer)}>Show/Hide Answer</button>
      <button onClick={nextCard}>Next</button>
    </div>
  );
}

export default FlashCardQuiz;
