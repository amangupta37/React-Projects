import React from "react";

class Addcard extends React.Component {
  state = {
    name: "",
  };
  render() {
    const takeUserInput = (e) => {
      this.setState({
        name: e.target.value,
      });
    };

    const addUser = () => {
      this.props.updateUserInput(this.state.name);
      this.setState({
        name: "",
      });
    };

    return (
      <div className="Addcard">
        <div className="search">
          <input
            type="text"
            placeholder="Github username"
            onChange={takeUserInput}
            value={this.state.name}
          />
          <button onClick={addUser} disabled={!this.state.name}>
            Add Card
          </button>
        </div>
      </div>
    );
  }
}

export default Addcard;
