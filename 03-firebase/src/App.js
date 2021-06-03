import React, { useState } from "react";
import "./App.css";
import Todo from "./Todo";
import SignUp from "./SignUp";
const App = () => {
  const [userAuth, setuserAuth] = useState(false);

  const [userData, setuserData] = useState([null]);

  // const [passUserData, setpassUserData] = useState([]);

  const passUserData = [];

  if (userAuth === true) {
    passUserData.push(userData);

    // console.log(passUserData);

    // passUserData.map((val) => {
    //   return console.log(val.name);
    // });
  }

  return (
    <div className="App">
      {userAuth ? (
        <Todo usersInfo={passUserData} logout={setuserAuth} />
      ) : (
        <SignUp value={setuserAuth} usersData={setuserData} />
      )}
    </div>
  );
};

export default App;
