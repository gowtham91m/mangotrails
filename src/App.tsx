import React, { useState } from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import About from './pages/About'
import PersonalInterests from './pages/PersonalInterests';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import client from './apollo';
import { ApolloProvider } from '@apollo/client';
import AppDevelopment from './pages/AppDevelopment';
import Artlab from './pages/ArtGallery';


function App() {

  const localMode = localStorage.getItem('themeMode') == 'true'? true : false;
  const [darkMode, setDarkMode] = useState(localMode || false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const toggleDarkMode = () => {
    const newMode = !darkMode
    localStorage.setItem('themeMode', newMode.toString());
    setDarkMode(newMode);
  };


  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
      <CssBaseline />
        <Router>
          <GlobalStyle />
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/About' element={<About />} />
            <Route path='/PersonalInterests' element={<PersonalInterests />} />
            <Route path='/AppDevelopment' element={<AppDevelopment />} />
            <Route path='/ArtGallery' element={<Artlab />} />
          </Routes>
        </Router>
      </ApolloProvider>
     </ThemeProvider>
  );
}

export default App;