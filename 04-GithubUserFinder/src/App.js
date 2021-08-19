import React from "react";
import "./App.css";
import Addcard from "./components/Addcard";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>The Github User Finder</h1>
        <Addcard />
      </div>
    );
  }
}

export default App;
