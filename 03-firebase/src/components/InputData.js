import React, { useState, useEffect } from "react";
import { firestore } from "../firebase";

const InputData = (props) => {
  const [storedUsersInput, setstoredUsersInput] = useState([]);

  const [userText, setuserText] = useState("");

  const storeData = (e) => {
    const userInput = e.target.value;
    setuserText(userInput);
  };

  const addData = () => {
    setstoredUsersInput([userText]);
    setuserText("");
  };

  const storeDataByKeyPress = (press) => {
    if (press.key === "Enter") {
      addData();
    }
  };

  useEffect(() => {
    storedUsersInput.map((value) => {
      const userInputObject = {
        title: value,
      };

      return firestore.collection("post").add(userInputObject);
    });
  }, [storedUsersInput]);

  return (
    <div className="input-data">
      <div className="input-box">
        <input
          type="text"
          id="input-text"
          onChange={storeData}
          onKeyPress={storeDataByKeyPress}
          value={userText}
          autoComplete="off"
          required
        />
      </div>
      <div className="btn">
        <button onClick={addData} id="btn-ne" disabled={!userText}>
          Add me
        </button>
      </div>
    </div>
  );
};

export default InputData;
