import React from "react";
import axios from "axios";

class Addcard extends React.Component {
  state = {
    name: "",
  };

  handleSubmit = async (userInput) => {
    const response = await axios.get(
      `https://api.github.com/users/${userInput}`
    );
    const data = response.data;

    this.props.updateUserInput(data);
  };

  takeUserInput = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  addUser = () => {
    this.handleSubmit(this.state.name);
    this.setState({
      name: "",
    });
  };

  render() {
    return (
      <div className="Addcard">
        <div className="search">
          <input
            type="text"
            placeholder="Github username"
            onChange={this.takeUserInput}
            value={this.state.name}
          />
          <button onClick={this.addUser} disabled={!this.state.name}>
            Add Card
          </button>
        </div>
      </div>
    );
  }
}

export default Addcard;
