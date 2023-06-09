import React from "react";
import PropTypes from "prop-types";

export const TodoItem = ({ todo = {}, onDeleteTodo, onToggleTodo }) => {
  return (
    <li
      key={todo.id}
      className="list-group-item d-flex justify-content-between"
    >
      <span
        className={`align-self-center ${(todo.done) ? "text-decoration-line-through" : ''}`}
        onDoubleClick={() => onToggleTodo(todo.id)}
        aria-label="span-todo-item"
      >
        {todo.description}
      </span>
      <button className="btn btn-danger" onClick={() => onDeleteTodo(todo.id)} aria-label="btn-delete-todo">
        x
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};
