function TodoItem({ todo, index, deleteTodo, checkTodo }) {
  return (
    <>
      <div className="">
        <input
          className=""
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => checkTodo(e, index)}
        />

        <span className="">{todo.title}</span>
      </div>
      <button onClick={() => deleteTodo(index)} className="">
        Delete
      </button>
    </>
  );
}

export default TodoItem;
