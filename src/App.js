import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Completed from './components/completed';
import Tasks from './components/tasks';


const App = () => {

  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem("todoList")) || [] );
  const [completedList, setCompletedList] = useState(JSON.parse(localStorage.getItem("completedList")) || [] );

  const handleChange = (e) => {
    setTask(e.target.value);
    
  };
  const handleAdd = () => {

    if (task === "") {
      alert("Enter Valid Text");
    }
    else { 
      // setTask("");
      console.log("task added");
      let todo={
         id: uuidv4(),
         task: task,
         isCompleted: false
      }
      
      todoList.push(todo);
      
      localStorage.setItem("todoList", JSON.stringify(todoList));
      // console.log(todoList);
      setTask("");
      setTodoList(todoList);
     }
  };
// console.log(task);
const handleDelete = (id) =>{
let newList = todoList.filter(each => (each.id!==id));
// console.log(newList);
// localStorage.removeItem("todoList");
localStorage.setItem("todoList", JSON.stringify(newList));
setTodoList(newList);
}

const handleComplete = (id) => {

  let newCompletedList = todoList.filter(each =>(each.id===id));
  // console.log(newCompletedList);


// console.log(completedList);

let value = 0;
for (let each of completedList){
  if(each.id===id){
    value += 1;
    console.log(each.task);
  }
}

if(value===0){
  completedList.push(newCompletedList[0]);
  // console.log(completedList);
}





localStorage.setItem("completedList", JSON.stringify(completedList));
setCompletedList([...completedList]);
}

let parsedTodoList = JSON.parse(localStorage.getItem("todoList"));
// console.log(parsedTodoList);
if(parsedTodoList===null){
  parsedTodoList=[];
}


  return (
    <div className='Container'>
            <div className='upper'>
            <h1 className="heading">
              Create Todo
            </h1>
            
            <input onChange={handleChange} value={task} type="text"  className="input" placeholder="What needs to be done?"/>
            <button onClick= {handleAdd} className="button">Add</button>
            
            </div>
           
            <ul className="mid" >
            <h1 className="todos-heading">
              My Tasks
            </h1>
            {parsedTodoList.map(each =>
            <Tasks each={each} handleDelete={handleDelete} handleComplete={handleComplete} key={each.id}/>
            )}
            </ul>
            
            <ul className="lower" >
            <h1 className="todos-heading">
              Completed Tasks
            </h1>
            {completedList.map(each =>
            <Completed each={each} key={(each.id)}/>
            )}
            </ul>
            
    </div>
  )
}

export default App