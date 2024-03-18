import React from 'react';
import './App.css';
import Flashcards from './Flashcards'; 

const App = () => {
  return (
    <div className="App">
      <div className='header'>
        <h1>The Ulitmate 1D Fan!</h1>
        <h2>How dedicated of a One Direction fan are you? Test all of your knowledge about the British Boy Band here!</h2>
        <h3>Number of cards: 10</h3>
      </div>
      <Flashcards />
    </div>
  );
};

export default App;
