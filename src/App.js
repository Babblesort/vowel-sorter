import React, { useState } from 'react';
import TextEntry from './TextEntry';
import LetterList from './LetterList';
import isVowel from './services/isVowel';
import isConsonant from './services/isConsonant';

function App() {
  const [vowels, setVowels] = useState([]);
  const [others, setOthers] = useState([]);
  const [mode, setMode] = useState('vowels'); // 'vowels' or 'consonants'

  const handleTextEntry = letter => {
    if (mode === 'vowels') {
      isVowel(letter)
        ? setVowels([...vowels, letter])
        : setOthers([...others, letter]);
    } else {
      isConsonant(letter)
        ? setVowels([...vowels, letter])
        : setOthers([...others, letter]);
    }
  };

  const handleReset = () => {
    setVowels([]);
    setOthers([]);
  };

  const handleModeChange = (newMode) => {
    setMode(newMode);
    handleReset();
  };

  const primaryLabel = mode === 'vowels' ? 'Vowels' : 'Consonants';

  return (
    <div className="App">
      <h1>Letter Sorter</h1>
      <div className="mode-selector">
        <button
          className={`mode-button ${mode === 'vowels' ? 'active' : ''}`}
          onClick={() => handleModeChange('vowels')}
        >
          Vowel Sorter
        </button>
        <button
          className={`mode-button ${mode === 'consonants' ? 'active' : ''}`}
          onClick={() => handleModeChange('consonants')}
        >
          Consonant Sorter
        </button>
      </div>
      <TextEntry onChange={handleTextEntry} onReset={handleReset} />
      <div className="letter-lists-container">
        <LetterList label={primaryLabel} letters={vowels} />
        <LetterList label="Others" letters={others} />
      </div>
    </div>
  );
}

export default App;

