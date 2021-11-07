import { useContext } from "react";
import AuthContext from "./../store/auth-context";

const Navbar = () => {
  const AuthCtx = useContext(AuthContext);

  const logOutHandler = (event) => {
    AuthCtx.logout();
  };

  return (
    <div>
      <h1>Navigation Bar</h1>
      {AuthCtx.isLoggedIn && <button onClick={logOutHandler}>Logout</button>}
    </div>
  );
};

export default Navbar;
