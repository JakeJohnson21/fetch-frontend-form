import React, { useEffect } from "react";
import { useFormik } from "formik";
import { userSchema } from "../../utils/userSchema";

function CreateUserForm({ occupations, states, onCreateUserSubmit }) {
  const formik = useFormik({
    initialValues: {
      // state values

      name: "",
      email: "",
      password: "",
      occupation: "",
      state: "",
    },

    onSubmit: (values) => {
      onCreateUserSubmit(values);
    },
    validationSchema: userSchema,
  });

  useEffect(() => {
    formik.validateForm();
  }, []);

  return (
    <section className="form__container">
      <form onSubmit={formik.handleSubmit} className="form">
        <fieldset className="fieldset">
          <div className="form__item_content">
            <input
              id="name"
              placeholder="Full Name"
              type="text"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-field input"
              defaultValue={formik.values.name}
            ></input>
            {formik.touched.name && formik.errors.name && (
              <span className="form__error">{formik.errors.name}</span>
            )}
          </div>
          <div className="form__item_content">
            <input
              id="email"
              required
              type="email"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="email"
              className="form-field input email__input"
              defaultValue={formik.values.email}
            ></input>
            {formik.touched.email && formik.errors.email && (
              <span className="form__error">{formik.errors.email}</span>
            )}
          </div>
          <div className="form__item_content">
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-field input"
              required
              defaultValue={formik.values.password}
            ></input>
            {formik.touched.password && formik.errors.password && (
              <span className="form__error">{formik.errors.password}</span>
            )}
          </div>
          <div className="form__item_content">
            <select
              title="Select your occupation"
              id="occupation"
              className="form-field select"
              name="occupation"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              defaultValue={formik.values.occupation}
            >
              <option
                selected="selected"
                disabled
                value=""
                className="default__value"
              >
                Select your occupation
              </option>
              {occupations.map((title, index) => (
                <option key={index}>{title}</option>
              ))}
            </select>
            {formik.touched.occupation && formik.errors.occupation && (
              <span className="form__error">{formik.errors.occupation}</span>
            )}
          </div>
          <div className="form__item_content">
            <select
              title="Select your State"
              id="state"
              className="form-field select select__state"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              defaultValue={formik.values.state}
              required
            >
              <option
                selected="selected"
                disabled
                value=""
                className="default__value"
              >
                Select your State
              </option>
              {states.map((state, index) => (
                <option key={index} className="state">
                  {Object.values(state).join(", ")}
                </option>
              ))}
            </select>
            {formik.touched.state && formik.errors.state && (
              <span className="form__error">{formik.errors.state}</span>
            )}
          </div>
        </fieldset>
        <button
          className={`submit__button ${
            formik.isValid ? "submit__button_valid" : ""
          }`}
          type="submit"
          disabled={!formik.isValid}
        >
          <span
            className={`${formik.isValid ? "submit__button_icon" : ""}`}
          ></span>
          <span
            className={`${formik.isValid ? "submit__button_background" : ""}`}
          ></span>
          <span
            className={`submit__button_text ${
              formik.isValid ? "submit__button_valid" : "submit__invalid"
            }`}
          >
            Create account
          </span>
        </button>
      </form>
    </section>
  );
}

export default CreateUserForm;
