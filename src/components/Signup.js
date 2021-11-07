import { useContext, useState } from "react";
import useInput from "./../hooks/use-input";
import Box from "./../ui/Box";
import AuthContext from "./../store/auth-context";
import styles from "./signup.module.css";

export default function Signup() {
  const AuthCtx = useContext(AuthContext);

  const {
    dataValue: emailValue = "",
    dataHandler: emailHandler,
    dataReset: emailReset,
    dataError: emailError
  } = useInput();
  const {
    dataValue: pswValue = "",
    dataHandler: pswHandler,
    dataReset: pswReset,
    dataError: pswError
  } = useInput();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function signUpSubmitHandler(event) {
    event.preventDefault();
    console.log("Button pressed.");
    console.log(emailValue + " " + pswValue);
    try {
      setIsLoading(true);
      const res = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBy6axmDG9IGQCoYn1cq39L6HviZDNwbvM",
        {
          method: "POST",
          body: JSON.stringify({
            email: emailValue,
            password: pswValue,
            returnSecureToken: true
          }),
          headers: {
            "Content-type": "application/json"
          }
        }
      );

      console.log(res);

      const data = await res.json();

      if (res.ok) {
        console.log(data.idToken);
        AuthCtx.login(data.idToken);
        setError("");
        emailReset();
        pswReset();
      } else {
        throw new Error(data.error.message);
      }
    } catch (error) {
      console.log("Error: " + error.message);
      setError(error.message);
    }
    setIsLoading(false);
  }

  return (
    <Box>
      <form>
        <h2>Signup</h2>

        <ul>
          <li>
            <label>E-mail</label>
          </li>
          <li>
            <input type="text" onChange={emailHandler} value={emailValue} />
          </li>
          <li>
            <label>Password</label>
          </li>
          <li>
            <input type="password" onChange={pswHandler} value={pswValue} />
          </li>
          <li>
            {error && <li>{error}</li>}
            {!isLoading && (
              <button type="submit" onClick={signUpSubmitHandler}>
                Signup
              </button>
            )}
          </li>
        </ul>
      </form>
    </Box>
  );
}
