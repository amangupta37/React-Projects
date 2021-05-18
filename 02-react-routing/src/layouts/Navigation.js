import React from "react";
import { Link } from "react-router-dom";
import classes from "./Nav.module.css";

const Navigation = () => {
  return (
    <div className={classes.header}>
      <div className={classes.title}>
        <h1>React MeetUps</h1>
      </div>

      <nav>
        <ul className={classes.ulist}>
          <li>
            <Link className={classes.style} to="/">
              All meetups
            </Link>
          </li>
          <li>
            <Link className={classes.style} to="/page2">
              Add meetup
            </Link>
          </li>
          <li>
            <Link className={classes.style} to="/page3">
              My favorites
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
