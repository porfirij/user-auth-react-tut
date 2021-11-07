import Box from "./../ui/Box";
import styles from "./login.module.css";

export default function Login() {
  return (
    <Box>
      <form>
        <h2>Login</h2>
        <ul>
          <li>
            <label>E-mail</label>
          </li>
          <li>
            <input type="text" />
          </li>
          <li>
            <label>Password</label>
          </li>
          <li>
            <input type="password" />
          </li>
          <li>
            <button type="submit">Login</button>
          </li>
        </ul>
      </form>
    </Box>
  );
}
