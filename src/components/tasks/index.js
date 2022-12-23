import React from 'react'
import {RiDeleteBin6Line} from "react-icons/ri"
import {GrCompliance} from "react-icons/gr"
import './index.css';


const Tasks = (props) => {

const {each, handleDelete, handleComplete} = props;
const {id} = each;

const handleClick1 = () => {
handleDelete(id);
console.log(id);
}

const handleClick2 = () => {
    handleComplete(id);
    
    }
// console.log(parsedTodoList);
  return (
    <>
    <li className='list'>{each.task}
    <button className="button1" onClick={handleClick1}><RiDeleteBin6Line /></button>
    <button className='button1' onClick={handleClick2}><GrCompliance /></button>
    </li>
    
    </>
  )
}

export default Tasks