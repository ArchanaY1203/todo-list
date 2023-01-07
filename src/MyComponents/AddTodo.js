import React, { useState } from "react";

const AddTodo = (props) => {
    const [title,setTitle]=useState("");
    const [desc,setdesc]=useState("");

    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description can not be blank");
        }
        else props.addTodo(title,desc);
        setTitle("");
        setdesc("");
    }
    let AddTodoStyle={
        margin: "3px auto",
        width: "50%"
    }
  return (
    <div className="container text-center  p-3 mb-1 bg-info text-dark" >
      <h3>Add a todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3" style={AddTodoStyle} >
          <label htmlFor="title" className="form-label"> Todo Title </label>
          <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="title"/>
        </div>
        <div className="mb-3" style={AddTodoStyle}>
          <label htmlFor="desc" className="form-label">Todo Description </label>
          <input type="text" value={desc} onChange={(e)=>{setdesc(e.target.value)}} className="form-control" id="desc"/>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
