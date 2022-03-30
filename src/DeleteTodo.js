const DeleteTodo = ({ todo, setTodos }) => {
  const handleDelete = () => {
    setTodos((prevTodos) => {
      return prevTodos.filter((t) => t.id !== todo.id);
    });
  };

  return (
    <span
      style={{
        color: "red",
        marginLeft: 10,
        fontWeight: "bold",
        cursor: "pointer"
      }}
      onClick={handleDelete}
    >
      x
    </span>
  );
};

export default DeleteTodo;
