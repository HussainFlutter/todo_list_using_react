import  {React,useState,useContext} from 'react'
import {deleteButtonContext,markAsFinishedContext} from "../context/context"

const Card = ({title,id,openDialog,isCompleted}) => {
  const [finish, setfinish] = useState(isCompleted)
  const deleteContext = useContext(deleteButtonContext);
  const markFinishedContext = useContext(markAsFinishedContext);
  return (
    <div className='gap-2 flex justify-between mx-2 my-3' >
        {/* Title and check box */}
        <div className='gap-2 flex items-center overflow-hidden'>
        <input 
        value={finish}
        checked = {isCompleted}
        onChange={()=>{
          setfinish(!finish)
          markFinishedContext(id,!finish)
        }} type="checkbox"/>
          
        {title}
        </div>
        {/* Title and check box */}
        {/* Buttons */}
      <div className='gap-2 flex h-8 my-auto'>
      <button onClick={()=>{openDialog(title,id)}} className='bg-gray-900 py-1 px-2 text-yellow-50 rounded-md' >Edit</button>
      <button 
      onClick={()=>{deleteContext(id)}} 
      className='bg-gray-900 py-1 px-2 text-yellow-50 rounded-md'>Delete</button>
      </div>
        {/* Buttons */}
    </div>
  )
}

export default Card
