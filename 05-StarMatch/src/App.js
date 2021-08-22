import React from "react";

import "./App.css";
import { Keypad } from "./components/Keypad";
import Star from "./components/Star";

const App = () => {
  return (
    <div className="App">
      <h1>hello react</h1>
      <Star />
      <Keypad />
    </div>
  );
};

export default App;
