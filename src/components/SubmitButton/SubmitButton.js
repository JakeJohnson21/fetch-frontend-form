import React from "react";

function SubmitButton({ isValid, type }) {
  return (
    <button
      type={type}
      className={`submit__button ${isValid ? "submit__button_valid" : ""}`}
    >
      <span
        // double arrows icon visible if field is filled / valid
        className={`${isValid ? "submit__button_icon" : ""}`}
      ></span>
      <span
        // button background changes on button mouse enter.
        // transitions away on mouse exit.
        className={`${isValid ? "submit__button_background" : ""}`}
      ></span>
      <span
        // button text default, valid, invalid appearances depends on condition
        className={`submit__button_text ${
          isValid ? "submit__button_valid" : "submit__invalid"
        }`}
      >
        Create account
      </span>
    </button>
  );
}

export default SubmitButton;
