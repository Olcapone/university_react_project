import React from "react";

export default function Button({ nameButton, onSubmit }) {
  return <button onClick={onSubmit}>{nameButton}</button>;
}
