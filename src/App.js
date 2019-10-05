import React, { useState } from 'react';
import TextEntry from './TextEntry';
import LetterList from './LetterList';
import isVowel from './services/isVowel';

function App() {
  const [vowels, setVowels] = useState([]);
  const [others, setOthers] = useState([]);

  const handleTextEntry = letter =>
    isVowel(letter)
      ? setVowels([...vowels, letter])
      : setOthers([...others, letter]);

  const handleReset = () => {
    setVowels([]);
    setOthers([]);
  };

  return (
    <div className="App">
      <h1>Vowel Sorter</h1>
      <TextEntry onChange={handleTextEntry} onReset={handleReset} />
      <div className="letter-lists-container">
        <LetterList label="Vowels" letters={vowels} />
        <LetterList label="Others" letters={others} />
      </div>
    </div>
  );
}

export default App;
