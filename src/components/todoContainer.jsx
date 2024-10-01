import {React,useState,useContext} from "react";
import Card from "./Card"
import Dialog from "./Dialog"
import {saveButtonContext} from "../context/context"

const TodoContainer = ({inputRef,todos}) => {

  const saveContext = useContext(saveButtonContext);
  
  const [showFinishedTodos, setshowFinishedTodos] = useState(false)  

  const [isDialogOpen, setDialogOpen] = useState({open:false,title:"",id:""});

  const openDialog = (title,id) => setDialogOpen({open : true,
    title: title,id:id});
  const closeDialog = () => setDialogOpen({open : false,
    title: "",id:""});

  return (
    <div className="justify-center flex my-4 min-h-96 max-h-fit">
      <div className="bg-slate-400 w-2/4 p-1">
        <div className="text-slate-950 text-center my-3 font-bold text-2xl">
          iTodo-All your todos at one place
        </div>
        <div className="text-black mx-3 font-bold text-2xl">Add a Todo</div>
        {/* Input */}
        <div className="flex flex-row gap-2">
          <input
          ref={inputRef}
            className="p-2 my-2 mx-1 rounded-xl w-full"
            type="text"
            placeholder="Enter a todo"
          />
{/* Save Button */}
          <button
            className="bg-slate-500 mx-2 my-3 px-4
     font-bold rounded-2xl text-slate-900"
          onClick={saveContext}>
            Save
          </button>
        </div>
        {/* Check box */}
        <div className="items-center font-bold flex gap-3 mx-2">
          <input className="h-4 w-4 accent-blue-500 " type="checkbox" 
          value={showFinishedTodos}
          onChange={()=>{
            setshowFinishedTodos(!showFinishedTodos);         
          }}/>
          Show Finished
        </div>
        {/* Separator */}
        <hr className="w-3/4 mx-auto my-3 border-black" />
        {/* Cards */}
        <div className="cards">
        {
         todos.map(item=>{
          return showFinishedTodos == false ? item.isCompleted == false && <Card key={item.id} title = {item.title}  id = {item.id}
          openDialog = {openDialog} isCompleted={item.isCompleted} 
          /> : item.isCompleted && <Card key={item.id} title = {item.title}  id = {item.id}
          openDialog = {openDialog}
          isCompleted={item.isCompleted}
          />
        }) 
        }
        </div>
      {isDialogOpen.open && <Dialog isOpen={isDialogOpen.open} onClose={closeDialog}  title = {isDialogOpen.title} id ={isDialogOpen.id} />}
      </div>
    </div>
  );
};
export default TodoContainer;
