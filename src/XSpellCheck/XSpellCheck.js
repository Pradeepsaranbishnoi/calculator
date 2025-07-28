import React, { useState } from 'react';

const customDictionary = {
  teh: 'the',
  wrok: 'work',
  fot: 'for',
  exampl: 'example'
};

const XSpellCheck = () => {
  const [text, setText] = useState('');
  const [correction, setCorrection] = useState('');

  const handleChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);
    setCorrection(''); // Reset correction

    if (!inputText.trim()) return;

    const words = inputText.split(/\s+/); // split by spaces
    for (let word of words) {
      const lowerWord = word.toLowerCase();
      if (customDictionary[lowerWord]) {
        setCorrection(`Did you mean: ${customDictionary[lowerWord]}?`);
        break;
      }
    }
  };

  return (
    <div className="spellcheck-container" style={{ padding: '20px', maxWidth: '500px' }}>
      <h2>XSpellCheck</h2>
      <textarea
        rows="4"
        cols="50"
        placeholder="Type something here..."
        value={text}
        onChange={handleChange}
        style={{ width: '100%', padding: '10px', fontSize: '16px' }}
      ></textarea>

      {correction && (
        <p style={{ color: 'red', marginTop: '10px', fontWeight: 'bold' }}>
          {correction}
        </p>
      )}
    </div>
  );
};

export default XSpellCheck;
