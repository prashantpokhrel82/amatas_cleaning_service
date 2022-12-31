import React, { useState } from "react";
import "./App.css";
import {
  About,
  Header,
  Services,
  Gurantee,
  Testimonials,
  Contact,
} from "./pages";
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
        <Testimonials />
        <Contact />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
