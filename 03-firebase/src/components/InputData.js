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
    setstoredUsersInput([...storedUsersInput, userText]);
    setuserText("");
  };

  const StoreDataByKeyPress = (press) => {
    if (press.key === "Enter") {
      addData();
    }
  };

  return (
    <div className="input-data">
      <div className="input-box">
        <input
          type="text"
          id="input-text"
          onChange={storeData}
          onKeyPress={StoreDataByKeyPress}
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
      <div className="show-data">
        {storedUsersInput.map((value) => {
          return (
            <ul>
              <li>
                <h1>{value}</h1>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default InputData;
