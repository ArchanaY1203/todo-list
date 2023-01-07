import "./App.css";
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import AddTodo from "./MyComponents/AddTodo";
 import About from "./MyComponents/About";
import React, { useState, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
function App() {
  let initialiseTodo;
  if (localStorage.getItem("todos") === null) {
    initialiseTodo = [];
  } else {
    initialiseTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };
  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const newTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, newTodo]);
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const [todos, setTodos] = useState(initialiseTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
        <AddTodo addTodo={addTodo} />
    <Todos todos={todos} onDelete={onDelete} />
        </>
      )
    },
    {
      path: "about",
      element: 
      <div><About/></div>,
    },
  ]);
  return (
    <>
    <Header title="My Todos-list"/>
    <RouterProvider router={router} />
    <Footer />
    </>
  );
}

export default App;
