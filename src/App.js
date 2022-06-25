import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';

function App() {
  return (
    <>
    
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    
    </>
  );
}

export default App;
