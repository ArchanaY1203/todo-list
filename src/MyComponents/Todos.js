import React from 'react'
import Todo from "../MyComponents/Todo";


const Todos = (props) => {
  let todoStyle={
    minHeight:"50vh"
  }
  return (
    <div className="container text-center p-3 mb-2 bg-info-subtle text-emphasis-info" style={todoStyle}>
      <h3 className="my-3">Todos List</h3>
      {props.todos.length===0?<h3>No todos pending!!</h3>:props.todos.map((todo)=>{
      return (
      <Todo todo={todo} key={todo.sno} onDelete={props.onDelete}/>
      )
      })}
      
    </div>
  )
}

export default Todos
