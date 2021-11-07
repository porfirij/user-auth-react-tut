import AuthContextProvider from "./store/AuthContextProvider";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import styles from "./app.module.css";
import "./styles.css";

export default function App() {
  return (
    <AuthContextProvider>
      <Navbar />
      <div className="content-container">
        <Signup />
        <Login />
      </div>
    </AuthContextProvider>
  );
}
