import React from "react";

class Addcard extends React.Component {
  render() {
    return (
      <div className="Addcard">
        <div className="search">
          <input type="text" placeholder="Enter username" />
          <button>Add Card</button>
        </div>
      </div>
    );
  }
}

export default Addcard;
