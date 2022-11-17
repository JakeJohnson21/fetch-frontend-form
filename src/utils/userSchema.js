import * as Yup from "yup";

export const userSchema = Yup.object().shape({
  name: Yup.string().required("You must enter your name."),
  email: Yup.string()
    .email("Email must be valid.")
    .required("You must enter your email."),
  password: Yup.string().min(8).required("You must enter a password."),
  occupation: Yup.string().required("You must select an occupation."),
  state: Yup.string().required("You must select your state."),
});
