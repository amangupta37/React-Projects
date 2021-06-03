import React from "react";
import Logo from "./img/google_logo.png";
import { auth, provider } from "./firebase";

const SignUp = (props) => {
  const signInWithGoogle = () => {
    auth.signInWithPopup(provider).then((uData) => {
      const googleUserData = {
        name: uData.user.displayName,
        image: uData.user.photoURL,
      };
      props.value(true);
      props.usersData(googleUserData);
    });
  };

  return (
    <div className="signup">
      <div className="app-name-title">
        <h1>Task-Tracker</h1>
      </div>
      <div className="logo">
        <img
          id="g-logo"
          src={Logo}
          alt="google-logo"
          onClick={signInWithGoogle}
        />
      </div>
    </div>
  );
};

export default SignUp;
