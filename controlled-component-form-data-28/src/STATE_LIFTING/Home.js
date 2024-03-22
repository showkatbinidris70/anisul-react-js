import React, { useState } from "react";
import Todos from "./Todos";
import NewTodo from "./NewTodo";

const dumyDodos = ["todo1", "todo2"];
export default function Home() {
  const [todos, setTodos] = useState(dumyDodos);
  const handleNewTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  return (
    <div>
      <NewTodo onTodo={handleNewTodo} />
      <Todos todos={todos} />
    </div>
  );
}
