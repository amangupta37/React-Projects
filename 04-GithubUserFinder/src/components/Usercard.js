import React from "react";

class Usercard extends React.Component {
  render() {
    console.log(this.props.searchUser);
    return (
      <div className="UserCard">
        <div className="userProfile">
          <div className="userImage">
            <img src="https://randomuser.me/api/portraits/women/5.jpg" alt="" />
          </div>
          <div className="userName">
            <h2>User Name</h2>
            <h4>@username</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Usercard;
