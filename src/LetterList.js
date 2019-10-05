import React from 'react';

function LetterList({ label, letters }) {
  return (
    <div className="letter-list">
      <header className="letter-list-header">{`${label} - (${letters.length})`}</header>
      <div className="letter-list-container">
        {letters.map((letter, index) => (
          <div className="letter" key={index}>
            {letter}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LetterList;
