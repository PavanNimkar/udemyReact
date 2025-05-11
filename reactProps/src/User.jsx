import React from "react";

function User(props) {
  return (
    <>
      <h1>My name is {props.name}</h1>
      <p>I am a {props.expert} expert</p>
    </>
  );
}

export default User;
