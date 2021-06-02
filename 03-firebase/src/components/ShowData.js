import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import EditBox from "../components/EditBox";
const ShowData = (props) => {
  const [state, setstate] = useState(false);
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

  return (
    <div className="data">
      <div className="header">
        <h1>{props.title}</h1>
      </div>

      <div className="discription">
        <EditIcon onClick={editData} />
        <DeleteIcon />
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
  );
};

export default ShowData;
