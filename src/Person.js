import React from "react";
import Button from "./Button";
export default function Person(props) {
  return (
    <div>
      <ul>
        <li>{props.singlePersonProp.first_name}</li>
        <li>{props.singlePersonProp.last_name}</li>
        <li>{props.singlePersonProp.email}</li>
        <li>{props.singlePersonProp.gender}</li>
        <Button
          handleDeletePersonFromPerson={props.handleDeletePersonFromApp}
          id={props.singlePersonProp.id}
        >
          Delete
        </Button>
        <hr />
      </ul>
    </div>
  );
}
