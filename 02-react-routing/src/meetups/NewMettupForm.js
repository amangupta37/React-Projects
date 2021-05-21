import React, { useRef } from "react";
import "../meetups/NewMettup.css";
const NewMettupForm = (props) => {
  const InputTitle = useRef();
  const InputUrl = useRef();
  const InputAddress = useRef();
  const InputDiscription = useRef();

  const handleForm = (event) => {
    event.preventDefault();

    const enteredTitle = InputTitle.current.value;
    const enteredUrl = InputUrl.current.value;
    const enteredAddress = InputAddress.current.value;
    const enteredDiscription = InputDiscription.current.value;

    const formdata = {
      Title: enteredTitle,
      Url: enteredUrl,
      Address: enteredAddress,
      Discription: enteredDiscription,
    };

    props.AddToFirebase(formdata);
  };

  return (
    <div className="form-box">
      <h1>Add MeetUp</h1>

      <div className="form-submit">
        <form className="form-items" onSubmit={handleForm}>
          <div className="row1">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              placeholder="Enter Title"
              autoComplete="off"
              required
              ref={InputTitle}
            ></input>
          </div>

          <div className="row1">
            <label htmlFor="image">Poster</label>
            <input
              type="url"
              id="image"
              autoComplete="off"
              placeholder="Enter Image Url"
              required
              ref={InputUrl}
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
              ref={InputAddress}
            ></input>
          </div>

          <div className="description row1">
            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              id="description"
              placeholder="Enter Discription"
              required
              ref={InputDiscription}
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
