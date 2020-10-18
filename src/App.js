import React, { useState } from "react";
import "./App.css";
import { lightTheme, darkTheme } from "./components/DarkMode/Theme";
import { useDarkMode } from "./components/DarkMode/useDarkMode";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/DarkMode/GlobalStyles";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import CountryDetail from "./pages/Country/CountryDetail";

const App = () => {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  return (
    <Router>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Header theme={theme} toggleTheme={themeToggler} />
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/country/:countryCode" component={CountryDetail} />
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;
