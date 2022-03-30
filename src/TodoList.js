import DeleteTodo from "./DeleteTodo";

const TodoList = ({ todos, setTodos }) => {
  const handleToggle = (todo) => {
    const updatedTodos = todos.map((t) => {
      return t.id === todo.id ? { ...t, done: !t.done } : t;
    });
    setTodos(updatedTodos);
  };

  const tasks = todos.map((todo) => {
    return (
      <li
        className="lists"
        onDoubleClick={() => handleToggle(todo)}
        style={{ textDecoration: todo.done ? "line-through" : "" }}
        key={todo.id}
      >
        {todo.text}
        <DeleteTodo setTodos={setTodos} todo={todo} />
      </li>
    );
  });
  return (
    <div>
      <h3>
        {todos.length > 0 ? tasks : <h3 className="nomore">No more tasks!</h3>}
      </h3>
    </div>
  );
};

export default TodoList;
