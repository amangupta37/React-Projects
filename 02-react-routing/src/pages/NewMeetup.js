import React from "react";
import NewMettupForm from "../meetups/NewMettupForm";
const NewMeetup = () => {
  const senddata = (formdata) => {
    fetch(
      "https://react-meetup-c9b7f-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(formdata),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };
  return (
    <div className="page3">
      <NewMettupForm AddToFirebase={senddata} />
    </div>
  );
};

export default NewMeetup;
