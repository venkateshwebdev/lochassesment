import React from "react";
import "./RightPane.css";

const RightPane = (props) => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const emailInput = form.querySelector('input[type="email"]');
    const emailValue = emailInput.value;
    if (emailValue) window.location.href = "https://app.loch.one/welcome";
  };
  return (
    <div className="right-pane">
      <div className="signup-form">
        <div className="form--header">
          <h2 className="form--heading">Sign up for exclusive access.</h2>
          <form className="form--input-holder" onSubmit={onSubmitHandler}>
            <input
              type="email"
              placeholder="Your email address"
              className="form--input"
            />
            <button type="submit" className="form--submit">
              Get started
            </button>
          </form>
        </div>

        <p className="form--description">
          You’ll receive an email with an invite link to join.
        </p>
      </div>
    </div>
  );
};

export default RightPane;
