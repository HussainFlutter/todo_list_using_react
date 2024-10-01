import { useState , useRef,useEffect} from 'react'
import './App.css'
import Nav_Bar from "./components/nav_bar.jsx"
import TodoContainer from "./components/todoContainer.jsx"
import { v4 as uuidv4 } from 'uuid';
import {deleteButtonContext,markAsFinishedContext,saveButtonContext,editButtonContext} from "./context/context.js"

function App() {
  const [todos,setTodos] = useState([]);
  const todoInput = useRef();
  useEffect(() => {
        setTodos(JSON.parse(localStorage.getItem("todos")))
  }, [])
  
  const createTodo = (title) => {
    return {
      title: title,
      isCompleted: false,
      id:uuidv4(), // Unique ID
    };
  };

  const handleSaveClick = () => {
    // console.log(todoInput.current.value); // Inputs value
    let title = todoInput.current.value;
    if(title != null && title && title != undefined)
    {
      let newTodo = createTodo(title) // Creating a new todo
      setTodos([...todos,newTodo]) // Setting the new todo
      localStorage.setItem("todos",JSON.stringify([...todos,newTodo]));
      todoInput.current.value = ""; // Making the input field empty
    }
  };

  const handleEditClick = (id,title) => {
    if(title)
    {
      let index = todos.findIndex((value)=>{
        return value.id == id;
      }); // Finding the index of the value using id
     
      
      todos[index].title = title; // Changing title
      setTodos([...todos]); // Reloading the array so the values update and the removed value is removed from the ui as well
    localStorage.setItem("todos",JSON.stringify([...todos]));

    } 
  };

  const handleDeleteClick = (id) => {
    let index = todos.findIndex((value)=>{
      return value.id == id;
    }); // Finding the index of the value using id
    todos.splice(index,1) // Index is the index of the vaLue that i want to remove
    setTodos([...todos]); // Reloading the array so the values update and the removed value is removed from the ui as well
    localStorage.setItem("todos",JSON.stringify([...todos]));
  };
  const markAsFinished = (id,isComplete) => {
    let index = todos.findIndex((value)=>{
      return value.id == id;
    }); // Finding the index of the value using id
   
    
    todos[index].isCompleted = isComplete; // Changing title
    setTodos([...todos]); // Reloading the array so the values update and the removed value is removed from the ui as well
    localStorage.setItem("todos",JSON.stringify([...todos]));
  }
  return (
    <>
    <deleteButtonContext.Provider value = {handleDeleteClick}>
    <markAsFinishedContext.Provider value = {markAsFinished}>
    <editButtonContext.Provider value = {handleEditClick}>
    <saveButtonContext.Provider value = {handleSaveClick}>
     <Nav_Bar/>
     <TodoContainer inputRef = {todoInput} todos = {todos} />
     </saveButtonContext.Provider>
     </editButtonContext.Provider>
     </markAsFinishedContext.Provider>
     </deleteButtonContext.Provider>
    </>
  )
}

export default App
