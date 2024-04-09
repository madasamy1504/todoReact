import React from 'react';
import { FaPlus } from 'react-icons/fa'

export const AddItems = ({handelSubmit}) => {
  return (
    <form className='addForm' onSubmit={handelSubmit}>
        <label htmlFor='addItem'>Add Item</label>
        <input autoFocus required id='addItem' type='text' placeholder='Add Item '/>

        <button type='submit' aria-label='Add Item'><FaPlus/></button>
    </form>
  )
}
