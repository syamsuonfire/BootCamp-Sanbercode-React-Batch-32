import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [userLists, setUserLists] = useState([
    { username: "admin", password: "12345678" },
    { username: "editor", password: "secret" },
    { username: "trainer", password: "rahasia" },
  ]);

  const [loginStatus, setLoginStatus] = useState(false);

  return (
    <UserContext.Provider
      value={{ userLists, setUserLists, loginStatus, setLoginStatus }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
