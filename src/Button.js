import React from "react";

const Button = props => {
  return (
    <button onClick={() => props.handleDeletePersonFromPerson(props.id)}>
      Delete
    </button>
  );
};
export default Button;
