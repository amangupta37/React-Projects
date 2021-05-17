import React from "react";

const Backdrop = (props) => {
  return (
    <div id="toggle-div" className="backdrop">
      <div className="ask-box">
        <p>Are you sure want to delete??</p>
        <div className="cnfrm-delete">
          <button id="cancle" onClick={props.PassEvent}>
            Cancle
          </button>
          <button id="cnfrm" onClick={props.PassEvent}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Backdrop;
