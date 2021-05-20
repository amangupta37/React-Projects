import React from "react";
import MeetupItem from "./MeetupItem";
import "./meetupList.css";
const MeetupList = (props) => {
  return (
    <div className="card-list">
      <ul className="meetuplist">
        {props.meetups.map((value) => (
          <MeetupItem
            id={value.id}
            title={value.title}
            key={value.id}
            image={value.image}
            address={value.address}
            description={value.description}
          />
        ))}
      </ul>
    </div>
  );
};

export default MeetupList;
