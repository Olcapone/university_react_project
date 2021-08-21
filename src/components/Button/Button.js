import React from "react";

export default function Button({ nameButton, onSubmit }) {
  return (
    <button type="submit" onClick={onSubmit}>
      {nameButton}
    </button>
  );
}
