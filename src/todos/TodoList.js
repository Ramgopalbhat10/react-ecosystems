import React from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../redux/actions';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos = [], onRemovePressed }) => {
  return (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map((todo, index) => (
        <TodoListItem
          todo={todo}
          key={index}
          onRemovePressed={onRemovePressed}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispath) => ({
  onRemovePressed: (text) => dispath(removeTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
