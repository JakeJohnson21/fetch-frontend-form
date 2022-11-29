import React from "react";
import { ErrorMessage, Field } from "formik";

function TextInput({ placeholder, id, name, type, children }) {
  return (
    <div className="form__item_content">
      <Field
        placeholder={placeholder}
        id={id}
        name={name}
        type={type}
        className="form-field"
      ></Field>
      <label className="form__label" for={id}>
        {children}
      </label>
      <ErrorMessage className="form__error" name={name} component="span" />
    </div>
  );
}

export default TextInput;
