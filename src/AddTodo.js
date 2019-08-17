import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [content, setContent] = useState("");

  const handleChange = e => {
    setContent(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(content);
    setContent("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Add new todo:</label>
          <input type="text" value={content} onChange={handleChange} />
        </div>
        <button>submit</button>
      </form>
    </div>
  );
};

export default AddTodo;
