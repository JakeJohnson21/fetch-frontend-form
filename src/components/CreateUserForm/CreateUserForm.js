import React from "react";
import { Field, ErrorMessage, Formik, Form } from "formik";
import { userSchema } from "../../utils/userSchema";

function CreateUserForm({ occupations, states, onCreateUserSubmit }) {
  return (
    <div className="form__container">
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          occupation: "",
          state: "",
        }}
        onSubmit={(values, { resetForm }) => {
          onCreateUserSubmit(values);
          resetForm();
        }}
        validationSchema={userSchema}
      >
        {({ isValid }) => (
          <Form className="form">
            <fieldset className="fieldset">
              <div className="form__item_content">
                <Field
                  placeholder="Full Name"
                  className="form-field"
                  name="name"
                  type="text"
                />
                <ErrorMessage
                  className="form__error"
                  component="span"
                  name="name"
                />
              </div>
              <div className="form__item_content">
                <Field
                  placeholder="Email"
                  className="form-field"
                  name="email"
                  type="email"
                />
                <ErrorMessage
                  className="form__error"
                  component="span"
                  name="email"
                />
              </div>
              <div className="form__item_content">
                <Field
                  placeholder="Password"
                  className="form-field"
                  name="password"
                  type="password"
                />
                <ErrorMessage
                  className="form__error"
                  component="span"
                  name="password"
                />
              </div>
              <div className="form__item_content">
                <Field
                  className="form-field select"
                  as="select"
                  name="occupation"
                  value=""
                >
                  <option selected="selected" disabled value="">
                    Select your occupation
                  </option>
                  {occupations.map((title, index) => (
                    <option key={index}>{title}</option>
                  ))}
                </Field>
                <ErrorMessage
                  className="form__error"
                  component="span"
                  name="occupation"
                />
              </div>
              <div className="form__item_content">
                <Field
                  className="form-field select"
                  as="select"
                  name="state"
                  value=""
                >
                  <option selected="selected" disabled value="">
                    Select your State
                  </option>
                  {states.map((state, index) => (
                    <option key={index} className="state">
                      {Object.values(state).join(", ")}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  className="form__error"
                  component="span"
                  name="state"
                />
              </div>
            </fieldset>

            <button
              className={`submit__button ${
                isValid ? "submit__button_valid" : ""
              }`}
            >
              <span
                className={`${isValid ? "submit__button_icon" : ""}`}
              ></span>
              <span
                className={`${isValid ? "submit__button_background" : ""}`}
              ></span>
              <span
                className={`submit__button_text ${
                  isValid ? "submit__button_valid" : "submit__invalid"
                }`}
              >
                Create account
              </span>
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CreateUserForm;
