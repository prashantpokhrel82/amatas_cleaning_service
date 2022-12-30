import React, { useState } from "react";
import "./App.css";
import ThemeToggler from "./components/ThemeToggler";
import { About, Header, Services, Gurantee } from "./pages";
import ThemeContext from "./ThemeContext";

const App = () => {
  const [theme, setTheme] = useState("theme-light");
  const toggleTheme = () => {
    setTheme(theme === "theme-light" ? "theme-dark" : "theme-light");
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app" data-theme={theme}>
        <Header />
        <About />
        <Services />
        <Gurantee />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
