import React, { useState } from "react";
import "./App.css";
import Todo from "./Todo";
import SignUp from "./SignUp";
const App = () => {
  const [userAuth, setuserAuth] = useState(
    JSON.parse(localStorage.getItem("pageRedirect"))
  );

  const passUserData = [];

  if (userAuth === true) {
    passUserData.push(JSON.parse(localStorage.getItem("googleData")));
  }

  return (
    <div className="App">
      {userAuth ? (
        <Todo usersInfo={passUserData} logout={setuserAuth} />
      ) : (
        <SignUp value={setuserAuth} />
      )}
    </div>
  );
};

export default App;
