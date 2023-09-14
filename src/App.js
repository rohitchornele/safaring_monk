import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/about/About'
import Services from './pages/services/Services'
import Contact from './pages/contact/Contact'
import Home from './pages/home/Home';
import Subscribe from './pages/Subscribe/Subscribe';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Subscribe />} />
      </Routes>
    </div>
  );
}

export default App;
