import React from "react";
import axios from "axios";

class Addcard extends React.Component {
  state = {
    name: "",
  };

  githubArr = [];

  handleSubmit = async (userInput) => {
    await axios
      .get(`https://api.github.com/users/${userInput}`)
      .then((res) => {
        const data = res.data;

        this.githubArr.push(data);

        return this.props.updateUserInput(this.githubArr);
      })
      .catch((err) => {
        return alert("User Not Found !!!");
      });
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
