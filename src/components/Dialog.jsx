import {React,useState,useRef,useContext} from 'react';
import {editButtonContext} from "../context/context"

const Dialog = ({ isOpen, onClose,title,id}) => {
    const [stateTitle, setStateTitle] = useState(title);
  const editContext = useContext(editButtonContext);
    
    // setStateTitle(title);

    const handleChange = (e) => {
        setStateTitle(e.target.value); // Update the state with the current input value
    };
    
     const editInput = useRef()
    if (!isOpen) return null;

    return (
        <div className="dialog-overlay bg-transparent opacity-50 h-60 w-72 fixed top-56 left-1/3 flex justify-center items-center  text-white">
            <div className="dialog bg-slate-800 p-10 rounded-sm shadow-md shadow-black gap-2 flex flex-col">
                <h2>Are you sure you want to Edit</h2>
                <input
                ref={editInput}
            className="px-2 rounded-xl w-full text-black"
            type="text"
            value={stateTitle}
            onChange={handleChange}
          />
                <div className='justify-between flex'>
                <button onClick={onClose}>Close</button>
                <button onClick={()=>{
                    editContext(id,stateTitle);
                    setStateTitle("");
                    onClose();
                }}>Edit</button>
                </div>
            </div>
        </div>
    );
};

export default Dialog;