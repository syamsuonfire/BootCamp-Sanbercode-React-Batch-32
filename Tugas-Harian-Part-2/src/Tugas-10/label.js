import React from "react";

const Label = (props) => {
  return (
    <>
      <div class="input-checkbox">
        <input type="checkbox" /> <p>{props.name}</p>
      </div>
    </>
  );
};

export default Label;
