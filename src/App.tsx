import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About'
import PersonalInterests from './pages/PersonalInterests';

import CssBaseline from '@mui/material/CssBaseline';

import client from './apollo';
import { ApolloProvider } from '@apollo/client';
import AppDevelopment from './pages/AppDevelopment';
import Artlab from './pages/ArtGallery';


function App() {

  return (
      <ApolloProvider client={client}>
      <CssBaseline />
        <Router>
          <GlobalStyle />
          <Navbar />
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='/PersonalInterests' element={<PersonalInterests />} />
            <Route path='/AppDevelopment' element={<AppDevelopment />} />
            <Route path='/ArtGallery' element={<Artlab />} />
          </Routes>
        </Router>
      </ApolloProvider>
  );
}

export default App;