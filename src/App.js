import React, { useState } from 'react';
import './App.css';

function App() {

  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  const [idNum, setIdNum] = useState(0);
  
  function addItem(){

    if(!newItem){
      alert("Enter an item");
      return;
    }

    setIdNum(prevId => prevId + 1);

    const item = {
      id: idNum,
      value: newItem
    }

    setItems(oldList => [...oldList, item]);
    setNewItem("");
  }

  function removeItem(id){
    const newItems = items.filter(item  => item.id !== id)
    setItems(newItems);
  }

  function clearItems(){
    setItems([]);
  }
  return (
    
    <div className="App">
     <h1>Todo List</h1>
     <input type = "text" value = {newItem} placeholder='Add Item...' onChange={e => setNewItem(e.target.value)}/>
     <button onClick={() => addItem()}>Add Item</button>
     <button onClick={() => clearItems()}>Clear</button>

     <ul>
       {items.map(item =>{
         return(
           <li key = {item.id}>{item.value}<button className="remove" onClick={() => removeItem(item.id)}>X</button></li>
         )
       })}
     </ul>
    </div>
  );
}

export default App;
