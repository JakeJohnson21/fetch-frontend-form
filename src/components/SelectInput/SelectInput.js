import React from "react";
import { ErrorMessage, Field } from "formik";

function SelectInput({ placeholder, id, name, occupation, state, children }) {
  return (
    <div className="form__item_content">
      <Field
        placeholder={placeholder}
        id={id}
        name={name}
        as="select"
        className="form-field select"
      >
        <option
          selected="selected"
          disabled
          value=""
        >{`Select your ${name}`}</option>
        {occupation
          ? occupation.map((item, index) => <option key={index}>{item}</option>)
          : state.map((state, index) => (
              <option key={index}>{Object.values(state).join(", ")}</option>
            ))}
      </Field>
      <label className="form__label" for={id}>
        {children}
      </label>
      <ErrorMessage className="form__error" name={name} component="span" />
    </div>
  );
}

export default SelectInput;
