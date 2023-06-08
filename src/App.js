import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import DetailCountry from "./DetailCountry";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./globalStyles";
import { lightTheme, darkTheme } from "./Themes"
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <Header onToggleTheme={themeToggler} />
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/:countryName" element={<DetailCountry />} /> 
          </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
