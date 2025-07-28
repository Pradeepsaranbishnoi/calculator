import React, { useState } from 'react';

const XLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setMessage('Please fill in both fields.');
      setMessageColor('red');
      return;
    }

    if (username === 'user' && password === 'password') {
      setMessage('Welcome, user!');
      setMessageColor('green');
    } else {
      setMessage('Invalid username or password');
      setMessageColor('red');
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={styles.input}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />

        <button type="submit" style={styles.button}>Submit</button>

        {message && (
          <div style={{ marginTop: '20px', color: messageColor, fontWeight: 'bold' }}>
            {message}
          </div>
        )}
      </form>
    </div>
  );
};

// Simple inline styles
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    backgroundColor: 'white',
    padding: '30px 40px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)'
  },
  input: {
    display: 'block',
    width: '100%',
    marginTop: '5px',
    marginBottom: '15px',
    padding: '8px',
    boxSizing: 'border-box'
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    cursor: 'pointer'
  }
};

export default XLogin;
