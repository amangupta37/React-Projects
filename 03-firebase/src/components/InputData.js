import React, { useState, useEffect } from "react";
import { firestore } from "../firebase";

const InputData = (props) => {
  const [userInput, setuserInput] = useState([]);

  const [pushData, setpushData] = useState("");

  const store = (e) => {
    let newdata = e.target.value;

    setpushData(newdata);
  };

  const addData = () => {
    setuserInput([...userInput, pushData]);
  };

  useEffect(() => {
    //adding data to firestore

    userInput.map((val) => {
      const realdata = {
        title: val,
      };
      return firestore.collection("post").add(realdata);
    });
  }, [userInput]);

  console.log("this is use data" + userInput);
  return (
    <div className="input-data">
      <div className="input-box">
        <input
          type="text"
          id="input-text"
          onChange={store}
          autoComplete="off"
          required
        />
      </div>

      <div className="btn">
        <button onClick={addData} id="btn-ne" disabled={!pushData}>
          Add me
        </button>
      </div>

      <div>
        {userInput.map((value) => {
          return <h1 style={{ color: "red" }}>{value}</h1>;
        })}
      </div>
    </div>
  );
};

export default InputData;
