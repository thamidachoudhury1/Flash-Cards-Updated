import React, { useState } from 'react';
import './Flashcards.css';

const Flashcards = () => {
  const [cards, setCards] = useState([
    { question: "When was Niall Horan born?", answer: "Niall Horan was born on 13th September 1993. Just like Liam, he’s a Virgo." },
    { question: "What is the shared middle name of Liam and Niall?", answer: " Liam and Niall both share the same middle name – James." },
    { question: "Does Harry have any siblings?", answer: "Harry has a sister called Gemma." },
    { question: "When was Harry Styles born?", answer: "Harry Styles was born on 1st February 1994 and he's an Aquarius." },
    { question: "How tall are the 1D boys?", answer: "Niall and Louis are both 5'8, Harry is 5'11, Liam is 5'10 and Zayn is 5'9." },
    { question: "Where did the boys all meet each other?", answer: "In a competition called X-Factor, but all the boys auditioned individually."},
    { question: "What song did Niall sing on X-Factor?", answer: "Niall sang Ne-Yo’s ‘So Sick’ in the X Factor first round and received glowing praise from Louis Walsh. A big Oasis fan, he later covered ‘Champagne Supernova’ at bootcamp." },
    { question: "What was 1D's first debut single that hit number 1 in the UK chart?", answer: "D’s debut single ‘What Makes You Beautiful’ entered the UK chart at Number 1 selling a whopping 153,965 copies in its first week. It also smashed the pre-order sales record at One Direction’s label Sony Music. It has now had more than 1 billion streams." },
    { question: "How many copies did 'Up All Night' sell in the UK?", answer: "‘Up All Night’ sold 1,086,434 copies in the UK and has been certified 3x Platinum by the British Phonographic Industry." }, 
    { question: "Which One Direction song won the Best British Single in 2012?", answer: " ‘What Makes You Beautiful’ won the Best British Single at the 2012 BRIT Awards ."}
  ]);
  
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  const handleInputChange = (event) => {
    setUserAnswer(event.target.value);
    setIsCorrect(null); // Reset correctness indicator when user types new answer
  };

  const handleSubmit = () => {
    const currentCard = cards[currentCardIndex];
    if (userAnswer.toLowerCase() === currentCard.answer.toLowerCase()) {
      setIsCorrect(true); // Set correctness indicator to true
    } else {
      setIsCorrect(false); // Set correctness indicator to false
    }
  };

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    setUserAnswer(''); // Clear user's answer when showing next card
    setIsCorrect(null); // Reset correctness indicator when showing next card
    setShowAnswer(false); // Reset showAnswer when showing next card
  };

  const handlePreviousCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    setUserAnswer(''); // Clear user's answer when showing previous card
    setIsCorrect(null); // Reset correctness indicator when showing previous card
    setShowAnswer(false); // Reset showAnswer when showing previous card
  };

  return (
    <div>
      <div className="flashcard" onClick={() => setShowAnswer((prevShowAnswer) => !prevShowAnswer)}>
        <div>
          <h2>{cards[currentCardIndex].question}</h2>
          {showAnswer && <p>{cards[currentCardIndex].answer}</p>}
        </div>
      </div>
      <div className="input-container">
        <input
          type="text"
          value={userAnswer}
          onChange={handleInputChange}
          className={isCorrect === true ? 'correct' : isCorrect === false ? 'incorrect' : ''}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div className="navigation-container">
        <button className="previous-button" onClick={handlePreviousCard}>Previous Card</button>
        <button className="next-button" onClick={handleNextCard}>Next Card</button>
      </div>
    </div>
  );
};

export default Flashcards;