import React from "react";
import "./App.css";
import Addcard from "./components/Addcard";
import Usercard from "./components/Usercard";

class App extends React.Component {
  state = {
    userInput: "",
  };

  getUserInput = (val) => {
    const userInput = val;

    if (userInput !== "") {
      this.setState({
        userInput,
      });
    }
  };

  render() {
    return (
      <div className="App">
        <h1>The Github User Finder</h1>
        <Addcard updateUserInput={this.getUserInput} />
        <Usercard searchUser={this.state.userInput} />
      </div>
    );
  }
}

export default App;
