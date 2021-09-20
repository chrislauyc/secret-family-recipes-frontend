import * as yup from "yup";

export default yup.object().shape({
  username: yup.string().required("Name is required"),

  email: yup.string().required("Email is required").email("Must be a valid email"),

  password: yup.string().required("Password is required").min(5, "Password must be at least 5 characters long"),
});
