import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todoAdded } from "./todosSlice";

function CreateTodo() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(todoAdded(text));
    setText("");
  }
  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <label>Add ToDo</label>
          <input type="text" onChange={handleChange} value={text} />
        </p>
        <input type="submit" />
      </form>
    </div>
  );
}

export default CreateTodo;
