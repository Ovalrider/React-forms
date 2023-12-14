import { useRef, useState } from "react";

export default function Login() {
  const [emailIsInvalid, setEmailIsInvalid] = useState(false)
  const email = useRef()
  const password = useRef()

  function handleSubmit(event) {
    event.preventDefault();
    const enteredEmail = email.current.value
    const eneteredPassword = password.current.value

    const emailIsValid = enteredEmail.includes('@')
    if (!emailIsValid){
      setEmailIsInvalid(true)
      return
    }

    setEmailIsInvalid(false)

    
    console.log("After reset")
    event.target.reset()
  }

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            ref={email}
          />
          <div className="control-error">{emailIsInvalid && <p>Please enter valid email.</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat" type="reset">Reset</button>
        <button type="submit" className="button" >Login</button>
      </p>
    </form>
  );
}
