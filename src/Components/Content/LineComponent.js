import React from 'react';
import { FaTrashCan } from "react-icons/fa6";


export const LineComponent = ({item,handClick,handDelete}) => {
  return (
    <li  className='item'>
    <input type='checkbox' checked ={item.checked}  onChange={()=>{handClick(item.id)}} />
    <label style={(item.checked) ? {textDecoration:'line-through'}:null} onDoubleClick={()=>{handClick(item.id)}}>{item.label}</label>
    <FaTrashCan role='button' tabIndex="0" onClick={()=>{handDelete(item.id)}} />
  </li>
  )
}
