import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import EditBox from "../components/EditBox";
import { firestore } from "../firebase";
const ShowData = (props) => {
  // const [usersDetails, setusersDetails] = useState(true);

  const [state, setstate] = useState(false); //show the edit option
  const [holdTile, setholdTitle] = useState("");
  const [holdId, setholdId] = useState("");

  const editData = () => {
    const holdtitle = props.title;

    const holdid = props.id;

    setholdId(holdid);

    setholdTitle(holdtitle);

    setstate(true);
  };

  const cancle = () => {
    setstate(false);
  };

  const update = () => {
    setstate(false);
  };

  const deleteData = () => {
    //delete data
    firestore.collection("post").doc(props.id).delete();
  };

  return (
    <div className="data">
      <div className="userDeatils-card">
        <div className="header">
          <h1>{props.title}</h1>
        </div>
        <div className="discription">
          <EditIcon onClick={editData} />
          <DeleteIcon onClick={deleteData} />
        </div>

        <div className="edit-box-place">
          {state ? (
            <EditBox
              CancleState={cancle}
              UpdateState={update}
              titleValue={holdTile}
              idValue={holdId}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ShowData;
