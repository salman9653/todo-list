import React, { useState } from "react";

function Item(props) {
  const [isDone, setDone] = useState(false);

  function lineThrough() {
    setDone((preValue) => !preValue);
  }

  return (
    <li
      onClick={lineThrough}
      style={{ cursor: "pointer", textDecoration: isDone && "line-through" }}
    >
      {props.text}
    </li>
  );
}

export default Item;
