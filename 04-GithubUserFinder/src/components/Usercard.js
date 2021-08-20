import React from "react";
class Usercard extends React.Component {
  render() {
    console.log(this.props.searchUser);

    return (
      <>
        {this.props.searchUser
          .slice(0)
          .reverse()
          .map((resp) => {
            return (
              <div className="UserCard" key={resp.id}>
                <a href={resp.html_url} target="_blank" rel="noreferrer">
                  <div className="userProfile">
                    <div className="userImage">
                      <img src={resp.avatar_url} alt="sss" />
                    </div>
                    <div className="userName">
                      {resp.name !== null ? (
                        <h2>{resp.name}</h2>
                      ) : (
                        <h2>UserName</h2>
                      )}
                      <p>@{resp.login}</p>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
      </>
    );
  }
}

export default Usercard;
