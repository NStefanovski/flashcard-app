import React from 'react';

function FlashCard({ card, showAnswer }) {
  return (
    <div>
      <p>{card.question}</p>
      {showAnswer && <p>{card.answer}</p>}
    </div>
  );
}

export default FlashCard;
