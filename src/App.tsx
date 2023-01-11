import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages';
import Experience from './pages/Experience';
import Codelab from './pages/Codelab';
import Artroom from './pages/Artroom';
import Leasure from './pages/Artroom';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/codelab' element={<Codelab />}/>
          <Route path='/artroom' element={<Artroom />} />
          <Route path='/leasure' element={<Leasure/>}/>
        </Routes>
        </Router>
    </>
  );
}

export default App;