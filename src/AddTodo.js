import { useState } from "react";

const AddTodo = ({ setTodos }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      id: 4,
      text,
      done: false
    };
    setTodos((prevTodos) => [...prevTodos, todo]);
    setText("");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex-container">
          <div>
            <input
              className="input"
              type="text"
              name="text"
              placeholder="Add Todo"
              value={text}
              onChange={handleChange}
            />
          </div>
          <div>
            <input type="submit" className="submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
