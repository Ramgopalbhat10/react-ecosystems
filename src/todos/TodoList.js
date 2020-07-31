import React from 'react';
import { connect } from 'react-redux';
import { removeTodo, completeTodo } from '../redux/actions';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos = [], onRemovePressed, onCompletePressed }) => {
  return (
    <div className="list-wrapper">
      <NewTodoForm />
      <h2>Your Todos</h2>
      {todos.map((todo, index) => {
        if (!todo.isCompleted) {
          return (
            <TodoListItem
              todo={todo}
              key={index}
              onRemovePressed={onRemovePressed}
              onCompletePressed={onCompletePressed}
            />
          );
        }
      })}
      <h2>Your Completed Todos</h2>
      {todos.map((todo, index) => {
        if (todo.isCompleted) {
          return (
            <TodoListItem
              todo={todo}
              key={index}
              onRemovePressed={onRemovePressed}
            />
          );
        }
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispath) => ({
  onRemovePressed: (text) => dispath(removeTodo(text)),
  onCompletePressed: (text) => dispath(completeTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
