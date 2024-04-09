import React from 'react';
import './Header.css';


export default function Header({...props}) {
  console.log(props);
  return (
    <header className='Header'><h1>{props.title} {props.extra}</h1></header>
  )

  
}

Header.defaultProps = {
  title: "My default title"   // this title will reflect when there is no ther props "title" from App.js, It's may be from backend so some times there no proper response
}
