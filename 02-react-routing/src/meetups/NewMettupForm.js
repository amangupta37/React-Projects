import React from "react";
import "../meetups/NewMettup.css";
const NewMettupForm = () => {
  return (
    <div className="form-box">
      <h1>Add MeetUp</h1>

      <div className="form-submit">
        <form className="form-items">
          <div className="row1">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              placeholder="Enter Title"
              autoComplete="off"
              required
            ></input>
          </div>

          <div className="row1">
            <label htmlFor="image">Image</label>
            <input
              type="url"
              id="image"
              autoComplete="off"
              placeholder="Enter Image Url"
              required
            ></input>
          </div>
          <div className="row1">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              placeholder="Enter Address"
              autoComplete="off"
              required
            ></input>
          </div>

          <div className="description row1">
            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              id="description"
              placeholder="Enter Discription"
              required
            ></textarea>
          </div>
          <div className="btn">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewMettupForm;
