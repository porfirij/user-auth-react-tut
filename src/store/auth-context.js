import React from "react";

const AuthContext = React.createContext({
  userToken: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {}
});

export default AuthContext;
