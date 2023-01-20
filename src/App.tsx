import React, { useEffect, useState } from 'react';
import GlobalStyle from './globalStyles';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages';
import Codelab from './pages/Codelab';
import Leasure from './pages/Leasure';
import whitebackground from './images/whitebackground.jpeg'
import blackbckground from './images/blackbackground.jpeg'
import {MantineProvider} from '@mantine/core';


export const lightTheme = {
  body: `'#f1f1f1'`,
  text: '#1c1c1c',
};
export const darkTheme = {
  body: '#000000',
  text: '#f1f1f1'
};

// export const lightTheme = {
//   colorScheme: 'dark',
// };
// export const darkTheme = { colorScheme: 'dark' }

const StyledApp = styled.div`
  min-height: 100vh;
  text-align: center;
  color: ${(props) => props.theme.text};
`

function App() {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";

  useEffect(() => {
    document.body.style.backgroundImage = `url(${whitebackground})`;
    document.body.style.backgroundSize = "cover";
  }, [])
  
  const setBackground = () => {
    if (isDarkTheme) {
      document.body.style.backgroundImage = `url(${whitebackground})`;
      document.body.style.backgroundSize = "cover";
    }
    else {
      document.body.style.backgroundImage = `url(${blackbckground})`;
      document.body.style.backgroundSize = "cover";
    }
  }

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
    setBackground();
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <StyledApp>
        <Router>
          <GlobalStyle />
          <Navbar toggleTheme={toggleTheme} />
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='/codelab' element={<Codelab />} />
            <Route path='/leasure' element={<Leasure />} />
          </Routes>
        </Router>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;