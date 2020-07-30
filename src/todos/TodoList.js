import React from 'react';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos = [{ text: 'Hello' }] }) => {
  return (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map((todo, index) => (
        <TodoListItem todo={todo} key={index} />
      ))}
    </div>
  );
};

export default TodoList;
