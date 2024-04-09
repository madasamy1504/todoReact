import React, {  useState } from 'react';
import './App.css';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import { AddItems } from './Components/AddItems/AddItems';

function App() {
  const[items,setItem] = useState(JSON.parse(localStorage.getItem("todo")));


  let handClick = (id) =>{
    // let temp = items;
    // temp[id].checked = !temp[id].checked;
    // setItem([...temp])
    let ListItems = items.map((item)=> item.id == id ? {...item,checked:!item.checked} : item);
    setItem(ListItems);
    localStorage.setItem("todo",JSON.stringify(ListItems));
  }
  let handDelete = (id) =>{
    // let temp = items;
    // temp.splice(id,1)
    // setItem([...temp])


    let ListItems = items.filter((item)=> item.id != id ? item : null);
    setItem(ListItems)
    localStorage.setItem("todo",JSON.stringify(ListItems));


  }

  let addItem = (item) => {
    const newId = items.length + 1;
    const generatedItem = {id:newId,checked:false,label:item }
    const temp = [...items, generatedItem];
    setItem(temp);
    localStorage.setItem("todo",JSON.stringify(temp));

  }

  let handelSubmit = (e) =>{
    e.preventDefault();
    let input = document.getElementById("addItem");
    addItem(input.value);
    input.value = "";
    // setNewItem("");
  }
  return (
    <div className="App">
     <Header title = "ToDo List" extra="of tasks"/>

     <AddItems 
    //  newItem = {newItem}
    //  setNewItem={setNewItem}
     handelSubmit={handelSubmit}  />

     <Content items = {items} handClick={handClick} handDelete={handDelete} />
     <Footer length={items.length} />
    </div>
  );
}

export default App;
