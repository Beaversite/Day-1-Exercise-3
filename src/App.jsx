import { useEffect, useState } from "react";
import Todos from "./Todos.jsx";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const [title, setTitle] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const checkTodo = (e, index) => {
    const newTodos = [...todos];
    newTodos[index].completed = e.target.checked;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const addTodo = () => {
    const newTodo = {
      title,
      completed: false,
    };

    setTodos([...todos, newTodo]);

    setTitle("");
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="w-full flex justify-center p-4">
      <div className="w-96 space-y-2">
        <h1>Todo App</h1>
        <label>
          Title
          <input
            className=""
            type="text"
            placeholder="Hit the sack."
            onChange={handleTitleChange}
            value={title}
          />
        </label>
        <div className="">
          <button onClick={addTodo} className="button button-add">
            Add
          </button>
        </div>

        <hr />

        <Todos
          todos={todos}
          checkTodo={checkTodo}
          deleteTodo={deleteTodo}
        ></Todos>
      </div>
    </div>
  );
}

export default App;
