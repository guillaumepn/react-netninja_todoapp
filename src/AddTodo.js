import React, { useState, useRef } from "react";

const AddTodo = ({ addTodo }) => {
  const [content, setContent] = useState("");
  const testCheckbox = useRef("");
  const testInput = useRef("");

  const handleChange = e => {
    setContent(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(content);
    setContent("");
    testCheckbox.current.checked = !testCheckbox.current.checked;
    testInput.current.value = "";
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Add new todo:</label>
          <input type="text" value={content} onChange={handleChange} />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              id="test"
              className="filled-in"
              ref={testCheckbox}
            />
            <span>test</span>
          </label>
        </div>
        <div>
          <label>check</label>
          <input type="text" ref={testInput} />
        </div>
        <button>submit</button>
      </form>
    </div>
  );
};

export default AddTodo;
