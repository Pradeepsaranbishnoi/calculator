import Calculator from './calculator/calculator.js';
import Xlogin from './Login/login.js';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';    

function App() {
  return (
    <div className="App">   
       <Router>
        <nav style={{ padding: '10px', background: '#eee' }}>
          <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
          <Link to="/login">XLogin</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="/login" element={<Xlogin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
