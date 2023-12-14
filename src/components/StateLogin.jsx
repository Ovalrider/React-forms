import { useState } from "react";
import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import { useInput } from "../hooks/useInput";

export default function StateLogin() {
  const {
    value: email,
    handleInput: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: hasEmailError,
  } = useInput("", (val) => {
    return isEmail(val) && isNotEmpty(val);
  });
  const {
    value: password,
    handleInput: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: hasPasswordError,
  } = useInput("", (val) => {
    return hasMinLength(val, 5);
  });

  function handleSubmit(event) {
    event.preventDefault();
    if (hasEmailError || hasPasswordError){
      return
    }
    console.log(email, password);
  }

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={email}
          error={hasEmailError && "Email is invalid."}
        />

        <Input
          label="password"
          id="password"
          type="password"
          name="password"
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          value={password}
          error={hasPasswordError && "Password is invalid."}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat" type="reset">
          Reset
        </button>
        <button className="button" type="submit">
          Login
        </button>
      </p>
    </form>
  );
}
