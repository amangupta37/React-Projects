import React from "react";
import NewMettupForm from "../meetups/NewMettupForm";
import { useHistory } from "react-router-dom";

const NewMeetup = () => {
  const history = useHistory();

  // Sending data to the server
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
    ).then(() => {
      history.replace("/");
    });
  };
  return (
    <div className="page3">
      <NewMettupForm AddToFirebase={senddata} />
    </div>
  );
};

export default NewMeetup;
