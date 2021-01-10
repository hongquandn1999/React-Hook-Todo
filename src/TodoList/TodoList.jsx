import React from "react";
import "./TodoList.css";
function TodoList(props) {
  const { listTodos, todoClick } = props;
  function handleClick(todo) {
    if (todoClick !== null) {
      todoClick(todo);
    }
  }

  return (
    <div>
      <ul className="box-ul">
        {listTodos.map(function (todo) {
          return (
            <li
              className="todo-item"
              key={todo.id}
              onClick={() => handleClick(todo)}
            >
              {todo.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
