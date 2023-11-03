import "./sign-in-form.styles.scss";

import React, { useState } from "react";

import {
  signInAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: ""
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [isLoading, setIsLoading] = useState(false);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInwithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password || !email) {
      alert("Please Enter your Email and Password");
      return;
    }

    try {
      setIsLoading(true);
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFields();
      setIsLoading(false);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email!");
          break;
        case "auth/user-not-found":
          alert("No user associated with this email!");
          break;
        default:
          alert("Something went wrong! Please try again letter!");
          console.log(error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          id="signin-email"
          onChange={handleChange}
          name="email"
          value={email}
          disabled={isLoading}
        />

        <FormInput
          label="password"
          type="password"
          id="signin-password"
          onChange={handleChange}
          name="password"
          value={password}
          disabled={isLoading}
        />

        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button buttonType="google" type="button" onClick={signInwithGoogle}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
