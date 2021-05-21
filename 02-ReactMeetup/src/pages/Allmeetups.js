import React, { useState, useEffect } from "react";
import MeetupList from "../meetups/MeetupList";

const Allmeetups = () => {
  //Fetching data from the database

  const [meetupData, setMeetupData] = useState([]);

  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetch("https://react-meetup-c9b7f-default-rtdb.firebaseio.com/meetups.json")
      .then((val) => {
        return val.json();
      })
      .then((data) => {
        const meetupArr = [];

        for (const key in data) {
          const meetupObj = {
            id: key,
            ...data[key],
          };

          meetupArr.push(meetupObj);
        }
        setloading(false);
        setMeetupData(meetupArr);
      });
  }, []);

  if (loading) {
    return (
      <section>
        <h2>loading wait.....</h2>
      </section>
    );
  }

  return (
    <div className="Allmeetups">
      <div className="dummy-data">
        <MeetupList meetups={meetupData} />
      </div>
    </div>
  );
};

export default Allmeetups;
