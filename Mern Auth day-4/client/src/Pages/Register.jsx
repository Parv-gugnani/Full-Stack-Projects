import React from "react";

export default function Register() {
  const registerUser = (e) => {
    //we use event.preventDefault to avoid unnecessary processing of the event when the user clicks outside of the register button
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={registerUser}>
        <label>Name</label>
        <input type="text" placeholder="enter name...." />
        <label>Email</label>
        <input type="email" placeholder="enter email...." />
        <label>Password</label>
        <input type="password" placeholder="enter password...." />
        <button type="sbumit">Submit</button>
      </form>
    </div>
  );
}
