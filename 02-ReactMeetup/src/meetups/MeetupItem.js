import React from "react";
import "./meetupItems.css";

const MeetupItem = (props) => {
  return (
    <div className="meetupitems">
      <div className="meetup-card">
        <div className="title">
          <h1>{props.title}</h1>
        </div>
        <div className="image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="descrpition">
          <p>{props.description}</p>
        </div>
        <div className="address">
          <h3>{props.address}</h3>
        </div>
      </div>
    </div>
  );
};

export default MeetupItem;
