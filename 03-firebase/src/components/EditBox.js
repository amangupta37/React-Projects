import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { firestore } from "../firebase";

const EditBox = (props) => {
  const [holdUpdatedVal, setholdUpdatedVal] = useState(props.titleValue);

  const updatedInput = (e) => {
    const updatedVal = e.target.value;

    setholdUpdatedVal(updatedVal);
  };

  const UpdateValue = () => {
    const id = props.idValue;

    firestore.collection("post").doc(id).update({
      title: holdUpdatedVal,
    });

    setholdUpdatedVal("");

    props.UpdateState();
  };

  const updateByKeyPress = (press) => {
    if (press.key === "Enter") {
      UpdateValue();
    }
  };

  return (
    <div className="edit-box" id="edit-box">
      <div className="update-box">
        <input
          id="update-input"
          type="text"
          autoComplete="off"
          placeholder="Enter Updated Value"
          value={holdUpdatedVal}
          onChange={updatedInput}
          onKeyPress={updateByKeyPress}
        />
        <div className="update-btn">
          <Button id="cbtn" onClick={props.CancleState}>
            Cancel
          </Button>
          <Button id="ubtn" onClick={UpdateValue} disabled={!holdUpdatedVal}>
            Update
          </Button>
        </div>
      </div>
    </div>
  );
};
export default EditBox;
