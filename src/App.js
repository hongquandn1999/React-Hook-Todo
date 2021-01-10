import React, { useEffect, useState } from "react";
import "./styles.css";
import TodoList from "./TodoList/TodoList";
import TodoForm from "./TodoForm/TodoForm";
import shortid from "shortid";
export default function App() {
  // Initial TodoList
  const todoList = [
    { id: 1, name: "Noelle 😀" },
    { id: 2, name: "Mimosa 😊" },
    { id: 3, name: "Asta 🥰" },
    { id: 4, name: "Yuno 🤩" }
  ];

  // Initial State
  const [todos, setTodos] = useState(todoList);
  useEffect(() => {
    async function fetchAPICovid() {
      fetch("https://api-football-v1.p.rapidapi.com/v2/teams/league/2", {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "45878aec4cmsh04526a7fc1ddec4p1b7a00jsnf12c585dda7f",
          "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
        }
      })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.error(err);
        });
    }
    fetchAPICovid();
  }, []);
  // function delete
  function handleDeleteTodo(todo) {
    const indexTodo = todos.findIndex((td) => td.id === todo.id);
    const newTodo = [...todos];
    newTodo.splice(indexTodo, 1);
    setTodos(newTodo);
  }

  function addNewTodo(todoItem) {
    const newTodo = {
      id: shortid.generate(),
      ...todoItem
    };
    const newTodoList = [...todos];
    newTodoList.push(newTodo);
    setTodos(newTodoList);
  }

  return (
    <div className="App">
      <h1>TodoList App</h1>
      <TodoForm onSubmitItem={addNewTodo} />
      <TodoList listTodos={todos} todoClick={handleDeleteTodo} />
    </div>
  );
}
