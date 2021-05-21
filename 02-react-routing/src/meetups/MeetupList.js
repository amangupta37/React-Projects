import React from "react";
import MeetupItem from "./MeetupItem";
import "./meetupList.css";
const MeetupList = (props) => {
  return (
    <div className="card-list">
      <ul className="meetuplist">
        {props.meetups
          .slice(0)
          .reverse()
          .map((value) => (
            <MeetupItem
              id={value.id}
              title={value.Title}
              key={value.id}
              image={value.Url}
              address={value.Address}
              description={value.Discription}
            />
          ))}
      </ul>
    </div>
  );
};

export default MeetupList;
