import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  loadTodos,
  removeTodoRequest,
  completeTodoRequest,
} from '../redux/thunks';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';

const TodoList = ({
  todos = [],
  onRemovePressed,
  onCompletePressed,
  isLoading,
  startLoadingTodos,
}) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);
  const loadingMessage = <div>Loading todos...</div>;
  const content = (
    <div className="list-wrapper">
      <NewTodoForm />
      <h4>Todos</h4>
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
      <h4>Completed Todos</h4>
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
  return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
  todos: state.todos,
  isLoading: state.isLoading,
});

const mapDispatchToProps = (dispath) => ({
  startLoadingTodos: () => dispath(loadTodos()),
  onRemovePressed: (id) => dispath(removeTodoRequest(id)),
  onCompletePressed: (id) => dispath(completeTodoRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
