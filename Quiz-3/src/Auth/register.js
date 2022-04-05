import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";

const Register = () => {
  const [input, setInput] = useState({ name: "", email: "", password: "" });
  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("https://backendexample.sanbersy.com/api/register", {
        name: input.name,
        email: input.email,
        password: input.password,
      })
      .then((e) => {
        history.push("/login");
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
        <label>Name: </label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={input.name}
        />
        <br />
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
        <button>Register</button>
      </form>
    </>
  );
};

export default Register;
