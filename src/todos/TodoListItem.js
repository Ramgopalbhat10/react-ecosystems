import React from 'react';

const TodoListItem = ({ todo, onRemovePressed, onCompletePressed }) => (
  <div className="todo-item-container">
    <h3>{todo.text}</h3>
    <div className="btn-container pending-todos">
      {todo.isCompleted ? null : (
        <button
          onClick={() => onCompletePressed(todo.id)}
          className="btn-completed"
        >
          Mark As Completed
        </button>
      )}
      <button onClick={() => onRemovePressed(todo.id)} className="btn-remove">
        Remove
      </button>
    </div>
  </div>
);

export default TodoListItem;
