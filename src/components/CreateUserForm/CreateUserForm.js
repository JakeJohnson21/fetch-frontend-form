import React from "react";
import { Formik, Form } from "formik";
import { userSchema } from "../../utils/userSchema";
import TextInput from "../TextInput/TextInput";
import SelectInput from "../SelectInput/SelectInput";
import SubmitButton from "../SubmitButton/SubmitButton";

function CreateUserForm({ occupations, states, onCreateUserSubmit }) {
  return (
    <div className="form__container">
      <Formik
        initialValues={{
          // input values initially blank
          name: "",
          email: "",
          password: "",
          occupation: "",
          state: "",
        }}
        onSubmit={(values, { resetForm }) => {
          onCreateUserSubmit(values);
          // Fomrik resetForm() prop. reset form on submit
          resetForm();
        }}
        validationSchema={userSchema}
      >
        {({ isValid }) => (
          // Formik isValid prop, returns true if there are no errors
          <Form className="form">
            <fieldset className="fieldset">
              <TextInput
                placeholder="Full Name"
                id="nameInput"
                name="name"
                type="text"
              >
                Full Name
              </TextInput>
              <TextInput
                placeholder="Email"
                id="emailInput"
                name="email"
                type="email"
              >
                Email
              </TextInput>
              <TextInput
                placeholder="Password"
                id="passwordInput"
                name="password"
                type="password"
              >
                Password
              </TextInput>
              <SelectInput
                placeholder="occupation"
                id="occupationInput"
                name="occupation"
                occupation={occupations}
              >
                Occupation
              </SelectInput>
              <SelectInput
                placeholder="Select"
                id="stateInput"
                name="state"
                state={states}
              >
                State
              </SelectInput>
            </fieldset>
            <SubmitButton type="submit" isValid={isValid}></SubmitButton>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CreateUserForm;
