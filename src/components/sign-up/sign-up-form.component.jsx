import React, { useState } from "react";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: ""
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={() => {}}>
        <label htmlFor="name">Display Name</label>
        <input
          type="text"
          id="name"
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          onChange={handleChange}
          name="email"
          value={email}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={handleChange}
          name="password"
          value={password}
        />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
