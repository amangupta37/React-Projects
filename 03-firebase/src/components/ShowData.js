import React from "react";

const ShowData = (props) => {
  return (
    <div className="data">
      <div className="header">
        <h1>{props.title}</h1>
      </div>

      <div className="discription">
        <p>Story Background : "{props.content}"</p>
        <h3>Ticket Number : {props.id}</h3>
        <h3>Ticket Holder : {props.user}</h3>
        <h3>age {props.age}</h3>
      </div>
    </div>
  );
};

export default ShowData;
