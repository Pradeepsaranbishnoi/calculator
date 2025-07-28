import Calculator from './calculator/calculator.js';
import Stopwatch from './Stopwatch/Stopwatch.js';
import Xlogin from './Login/login.js';
import WeatherApp from './Weather/Weather.js';
import XSpellCheck from './XSpellCheck/XSpellCheck.js';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';    

function App() {
  return (
    <div className="App">   
       <Router>
        <nav style={{ padding: '10px', background: '#eee' }}>
          <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
          <Link to="/login" style={{ marginRight: '10px' }}>XLogin</Link>
          <Link to="/stopwatch" style={{ marginRight: '10px' }}>Stopwatch</Link>
          <Link to="/weatherapp" style={{ marginRight: '10px' }}>WeatherApp</Link>
          <Link to="/spellcheck" style={{ marginRight: '10px' }}>XSpellCheck</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="/login" element={<Xlogin />} />
          <Route path="/stopwatch" element={<Stopwatch />} />
          <Route path="/weatherapp" element={<WeatherApp/>} />
          <Route path="/spellcheck" element={<XSpellCheck/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
