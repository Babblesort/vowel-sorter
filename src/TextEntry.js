import React, { useState } from 'react';

const TextEntry = ({ onChange, onReset }) => {
  const [text, setText] = useState('');

  const handleOnChange = e => {
    const text = e.target.value;
    setText(text);

    if (text.length >= 1) {
      onChange(text[text.length - 1]);
    }
  };

  const handleReset = () => {
    setText('');
    onReset();
  };

  return (
    <div className="letter-entry-container">
      <input
        type="text"
        className="letter-entry"
        value={text}
        onChange={handleOnChange}
      />
      <button className="reset-button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default TextEntry;
