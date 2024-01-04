import React, { useState } from "react";

const App=()=> {

  const [todo, setTodo]= useState("");
  const[updatetodo, setUpdatetodo]= useState([]);
  const[id, setId]= useState(1);
  

  function addTask(e){
    e.preventDefault();
    setUpdatetodo([...updatetodo, {id: id, title: todo}])
    setTodo("");
    setId(id+1);
  }

  function deleteTodo(deleteid){
    setUpdatetodo(updatetodo.filter((item)=>(item.id!=deleteid)))
  }
  return (
    <div>
      <form onSubmit={addTask}>
        <input type="text" placeholder="Enter your task" onChange={(e)=>setTodo(e.target.value)} value={todo}></input>
        <button type="submit">ADD</button>
      </form>

      <ol>
        {updatetodo.map((item)=>(
          <li key={item.id}>{item.title} <button onClick={()=>(deleteTodo(item.id))}>Delete</button> </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
