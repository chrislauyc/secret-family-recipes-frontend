import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";

import schema from "../../../validation/signUpSchema";
import SignUpForm from "./SignUpForm";


const initialFormValues = {
  username: "",
  email: "",
  password: "",
};

const initialFormErrors = {
  username: "",
  email: "",
  password: "",
};

const initialDisabled = true;
export default function SignUp() {
  const history = useHistory();
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
  };

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  const registerUser = (newUser, userToLogIn) => {
    axios
      .post(
        "https://family-recipes-app.herokuapp.com/api/auth/register",
        newUser
      )
      .then((res) => {
        console.log("happy path: ", res.data);
        localStorage.setItem("id", res.data.user_id);
        axios
          .post(
            "https://family-recipes-app.herokuapp.com/api/auth/login",
            userToLogIn
          )
          .then((res) => {
            console.log("happy path: ", res.data);
            localStorage.setItem("token", res.data.token);
            console.log(res.data.token)
            history.push("/home");
          })
          .catch((err) => {
            console.log("sad path: ", err);
          })
        history.push("/home");
      })
      .catch((err) => {
        console.log("sad path: ", err);
        debugger;
      })
      .finally(setFormValues(initialFormValues));
  };

  const formSubmit = () => {
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    };
    const userToLogIn = {
      username: formValues.username.trim(),
      password: formValues.password.trim(),
    };
    registerUser(newUser, userToLogIn);
  };

  return (
    <>
      <SignUpForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
    </>
  );
}
