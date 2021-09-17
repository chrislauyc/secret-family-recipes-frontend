import * as yup from "yup";

export default yup.object().shape({
  username: yup.string().required("Name is required").min(3, "Name must be at least 3 characters long"),

  email: yup.string().required("Email is required"),

  password: yup.string().required("Password is required"),
});
