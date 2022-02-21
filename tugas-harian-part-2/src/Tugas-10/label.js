import React from "react";

const Label = (props) => {
  return (
    <>
      <input type="checkbox" />
      <label>{props.name}</label>
      <br />
    </>
  );
};

export default Label;
