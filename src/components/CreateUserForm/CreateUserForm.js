import React from "react";
import { useFormik } from "formik";
import { userSchema } from "../../utils/userSchema";

function CreateUserForm({ occupations, states, onCreateUserSubmit }) {
  const formik = useFormik({
    initialValues: {
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

  return (
    <section className="form__container">
      <div className="form__heading">
        <p className="form__subtitle">New here?</p>
        <h2 className="form__title">Create an account</h2>
        <hr className="form__heading_underline"></hr>
      </div>

      <form onSubmit={formik.handleSubmit} className="form">
        <fieldset className="fieldset">
          <input
            id="name"
            placeholder="Full Name"
            type="text"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="form-field input name__input"
            defaultValue={formik.values.name}
            noValidate
          ></input>
          {formik.touched.name && formik.errors.name && (
            <span className="form__error">{formik.errors.name}</span>
          )}

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
            noValidate
          ></input>
          {formik.touched.email && formik.errors.email && (
            <span className="form__error">{formik.errors.email}</span>
          )}

          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="form-field input password__input"
            required
            defaultValue={formik.values.password}
            noValidate
          ></input>
          {formik.touched.password && formik.errors.password && (
            <span className="form__error">{formik.errors.password}</span>
          )}

          <select
            id="occupation"
            className="form-field select select__occupation"
            name="occupation"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
            defaultValue={formik.values.occupation}
            noValidate
          >
            <option selected="selected" disabled value="" className="default__value">
              Choose occupation
            </option>
            {occupations.map((title, index) => (
              <option
                name="occupation"
                key={index}
                className="occupation-title"
              >
                {title}
              </option>
            ))}
          </select>
          {formik.touched.occupation && formik.errors.occupation && (
            <span className="form__error">{formik.errors.occupation}</span>
          )}
          <select
            id="state"
            className="form-field select select__state"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            defaultValue={formik.values.state}
            required
            noValidate
          >
            <option selected="selected" disabled value="" className="default__value">
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
        </fieldset>
        <button
          className={`submit__button ${formik.isValid ? "submit__button_valid":""}`}
          type="submit"
          disabled={!formik.isValid}
        >
        <span className={`${formik.isValid ? "submit__button_icon": ""}`}></span>
        <span className={`${formik.isValid ? "submit__button_background":""}`}></span>
          <span className={`submit__button_text ${formik.isValid ? "submit__button_valid": "submit__invalid"}`}>Create account
          </span>

        </button>
      </form>
    </section>
  );
}

export default CreateUserForm;
