import React from "react";

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map(todo => (
      <div className="collection-item" key={todo.id}>
        {todo.content}{" "}
        <button onClick={() => deleteTodo(todo.id)}>&times;</button>
      </div>
    ))
  ) : (
    <div className="center">No todos</div>
  );

  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
