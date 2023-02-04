import React, { useEffect, useState } from 'react';
import GlobalStyle from './globalStyles';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages';
import Codelab from './pages/Codelab';
import Leasure from './pages/Leasure';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';




const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  const [theme, setTheme] = useState("dark");
  const isDarkTheme = theme === "dark";


  
  // const setBackground = () => {
  //   if (isDarkTheme) {
  //     document.body.style.backgroundImage = `url(${whitebackground})`;
  //     document.body.style.backgroundSize = "cover";
  //   }
  //   else {
  //     document.body.style.backgroundImage = `url(${blackbckground})`;
  //     document.body.style.backgroundSize = "cover";
  //   }
  // }

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
    // setBackground();
  }

  return (
    <ThemeProvider theme={isDarkTheme ?  lightTheme: darkTheme}>
      <CssBaseline />
        <Router>
          <GlobalStyle />
          <Navbar toggleTheme={toggleTheme} />
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='/codelab' element={<Codelab />} />
            <Route path='/leasure' element={<Leasure />} />
          </Routes>
        </Router>
     </ThemeProvider>
  );
}

export default App;