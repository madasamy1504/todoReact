import React from 'react';
import { LineComponent } from './LineComponent';

export const ItemList = ({items,handClick,handDelete}) => {
  return (
    <ul>
    {items.map( (item) => (
      <LineComponent item = {item} handClick={handClick} handDelete={handDelete} key={item.id} />
    ))}
   </ul>
  )
}
