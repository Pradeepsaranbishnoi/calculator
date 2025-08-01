import React, { useState } from "react";

function XDictionary() {
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [definition, setDefinition] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const handleSearch = () => {
    const found = dictionary.find(
      (entry) => entry.word.toLowerCase() === searchTerm.trim().toLowerCase()
    );
    if (found) {
      setDefinition(found.meaning);
      setNotFound(false);
    } else {
      setDefinition(null);
      setNotFound(true);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Dictionary App</h1>
      <input
        type="text"
        value={searchTerm}
        placeholder="Search a word..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch} style={{ marginLeft: "10px" }}>
        Search
      </button>

      <div style={{ marginTop: "20px" }}>
        <h3>Definition:</h3>
        {definition && <p>{definition}</p>}
        {notFound && <p>Word not found in the dictionary.</p>}
      </div>
    </div>
  );
}

export default XDictionary;