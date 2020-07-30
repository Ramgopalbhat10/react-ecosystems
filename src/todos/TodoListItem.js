import React from 'react';

const TodoListItem = ({ todo }) => (
  <div className="todo-item-container">
    <h3>{todo.text}</h3>
    <div className="btn-container">
      <button className="btn-completed">Mark As Completed</button>
      <button className="btn-remove">Remove</button>
    </div>
  </div>
);

export default TodoListItem;
