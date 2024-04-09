import React from 'react';
import './Content.css';
import Count from './Inc/DecComponent/Count';
import { ItemList } from './ItemList';


export default function Content({items,handClick,handDelete}) {
  console.log("I am content");
 return (
    <main>
     <Count/>
     {items.length == 0 ? <div className='emptyText'>Your List is empty</div> : null}
      <ItemList items = {items} handClick={handClick} handDelete={handDelete} />
    </main>
  )
}
