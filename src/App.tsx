import React, { useState } from 'react';
import GlobalStyle from './globalStyles';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages';
import Codelab from './pages/Codelab';
import Artroom from './pages/Artroom';
import Leasure from './pages/Artroom';


export const lightTheme = {
  body: '#f1f1f1',
  text: '#1c1c1c'
};
export const darkTheme = {
  body: '#000000',
  text: '#f1f1f1'
};


function App() {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light":"dark")
  }
  return (
    <ThemeProvider theme={isDarkTheme?darkTheme:lightTheme}>
    <StyledApp>
      <Router>
          <GlobalStyle />
        <Navbar toggleTheme={toggleTheme}/>
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/codelab' element={<Codelab />}/>
          <Route path='/artroom' element={<Artroom />} />
          <Route path='/leasure' element={<Leasure/>}/>
        </Routes>
        </Router>
    </StyledApp>
    </ThemeProvider>
  );
}

const StyledApp = styled.div`
  min-height: 100vh;
  text-align: center;
  background-color: ${(props)=> props.theme.body};
  color: ${(props) => props.theme.text};
`

export default App;