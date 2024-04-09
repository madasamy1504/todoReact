import React from 'react';
import './Footer.css';

export default function Footer({length}) {
  return (
    <footer className='Footer'><h1>Copy @ 2024  {length}List {length == 1 ? "item" : "items" }</h1></footer>
  )
}
