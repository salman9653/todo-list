import React, { useState } from "react";
import Item from "./Item";

function App() {
  const [input, setInput] = useState("");
  const [notes, setNotes] = useState([]);

  function handelChange(event) {
    const value = event.target.value;
    setInput(value);
  }
  function handelClick() {
    setNotes((prevValue) => {
      return [...prevValue, input];
    });
    setInput("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handelChange} type="text" value={input} />
        <button onClick={handelClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {notes.map((note) => {
            return <Item text={note} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
