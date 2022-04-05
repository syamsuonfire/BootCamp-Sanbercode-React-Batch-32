import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";

const Login = () => {
  const [input, setInput] = useState({ email: "", password: "" });

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("https://backendexample.sanbersy.com/api/user-login", {
        email: input.email,
        password: input.password,
      })
      .then((res) => {
        let token = res.data.token;
        let user = res.data.user;
        Cookies.set("token", token, { expires: 1 });
        Cookies.set("name", user.name, { expires: 1 });
        Cookies.set("email", user.email, { expires: 1 });
        //history.push("/");
        window.location = "/";
      });
  };

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setInput({ ...input, [name]: value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Email: </label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={input.email}
        />
        <br />
        <label>Password: </label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={input.password}
        />
        <br />
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
