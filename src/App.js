import React, { useState } from 'react'
import './App.css';
import Header from './components/Header';
import Characters from './components/Characters';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';


const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? lightTheme : darkTheme}>
      <div className="App">
        <GlobalStyles />
        <Header darkMode={darkMode} onClick={handleClick} />
        <h1>Rick and Morty characters</h1>
        <Characters />
      </div>
    </ThemeProvider>
  );
}

export default App;
