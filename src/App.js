import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        {" "}
        <Weather />
        <footer>
          This project was coded by Leila Nortje and is open-sourced on{" "}
          <a href="https://github.com/leila017/react-weather-app">github</a>
        </footer>
      </div>
    </div>
  );
}
