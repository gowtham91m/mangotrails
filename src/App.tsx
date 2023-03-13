import React, { useState } from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages';
import Codelab from './pages/Codelab';
import Leasure from './pages/Leasure';
import PersonalInterests from './pages/PersonalInterests';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import client from './apollo';
import { ApolloProvider } from '@apollo/client';


function App() {

  const [darkMode, setDarkMode] = useState(localStorage.getItem('themeMode') || false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#2196f3',
      },
    },
  });

  const toggleDarkMode = () => {
    localStorage.setItem('themeMode', darkMode.toString());
    setDarkMode(!darkMode);
  };


  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
      <CssBaseline />
        <Router>
          <GlobalStyle />
          <Navbar toggleTheme={toggleDarkMode} />
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='/PersonalInterests' element={<PersonalInterests />} />
          </Routes>
        </Router>
      </ApolloProvider>
     </ThemeProvider>
  );
}

export default App;