import React, { useState } from "react";
import Todo from "./Todo";

export default function NewTodo(props) {
  const [todos, setTodos] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onTodo(todos);
  };
  const handleChange = (e) => {
    setTodos(e.target.value);
   
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={todos}
            className="form-control"
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
