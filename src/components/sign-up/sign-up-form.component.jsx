import "./sign-up-form.styles.scss";

import React, { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: ""
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [isLoading, setIsLoading] = useState(false);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("password do not match");
      return;
    }

    try {
      setIsLoading(true);
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      setFormFields(defaultFormFields);
      setIsLoading(false);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use!");
      } else if (error.code === "auth/weak-password") {
        alert("Password should be at least 6 characters");
      } else {
        console.log("User creation encountred an error", error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          id="name"
          onChange={handleChange}
          name="displayName"
          value={displayName}
          disabled={isLoading}
        />

        <FormInput
          label="Email"
          type="email"
          id="email"
          onChange={handleChange}
          name="email"
          value={email}
          disabled={isLoading}
        />

        <FormInput
          label="password"
          type="password"
          id="password"
          onChange={handleChange}
          name="password"
          value={password}
          disabled={isLoading}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          id="confirmPassword"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
          disabled={isLoading}
        />

        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
