import React, { useState } from "react";

function CreateUserForm({ occupations, states, onCreateUserSubmit }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [occupation, setOccupation] = useState("");
  const [stateUS, setStateUS] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const userData = {
      firstName,
      lastName,
      email,
      password,
      occupation,
      stateUS,
    };
    onCreateUserSubmit(userData);
    console.log("userData = ", userData);
  }

  function handleFirstName(e) {
    setFirstName(e.target.value);
  }
  function handleLastName(e) {
    setLastName(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  function handleOccupation(e) {
    setOccupation(e.target.value);
  }
  function handleStateUS(e) {
    setStateUS(e.target.value);
  }

  return (
    <section className="form__container">
      <div className="form__heading">
        <p className="form__subtitle">New here?</p>
        <h2 className="form__title">Create an account</h2>
      </div>

      <form className="form">
        <fieldset className="fieldset">
          <input
            placeholder="First name"
            type="text"
            name="first-name"
            onChange={handleFirstName}
            className="form-field input first-name__input"
            required
          ></input>

          <input
            required
            type="text"
            placeholder="Last name"
            name="last-name"
            onChange={handleLastName}
            className="form-field input last-name__input"
          ></input>

          <input
            required
            type="email"
            placeholder="Email"
            onChange={handleEmail}
            name="email"
            className="form-field input email__input"
          ></input>

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handlePassword}
            className="form-field input password__input"
            required
          ></input>

          <select
            className="form-field select select__occupation"
            name="occupation"
            onChange={handleOccupation}
            defaultValue="Choose occupation"
            required
          >
            {occupations.map((title, index) => (
              <option key={index} className="occupation-title">
                {title}
              </option>
            ))}
          </select>

          <select
            className="form-field select select__state"
            name="state"
            onChange={handleStateUS}
            defaultValue="Select your State"
            required
          >
            {states.map((state, index) => (
              <option key={index} className="state">
                {Object.values(state).join(", ")}
              </option>
            ))}
          </select>
        </fieldset>
        <p className="requirement__text">All fields are required</p>
        <button className="submit__button" type="submit" onClick={handleSubmit}>
          Create account
        </button>
      </form>
    </section>
  );
}

export default CreateUserForm;
