import React, { useState } from 'react';


export default function Count() {
    const[count,setCount] = useState(0);

    let increment = () =>{
        setCount( (preState) => preState + 1 )
    }
    let decrement = () =>{
        setCount( (preState) => preState - 1 )
    }

  return (
    <div>
      Count: {count}
      <button onClick={ () => { increment() } }>+</button>
      <button onClick={ () => { decrement() } }>-</button>
    </div>
  )
}
