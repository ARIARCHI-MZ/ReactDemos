import React,{useState} from 'react'

function AddListItem() {
    const [items, setItems] = useState([]);
    const addHandler = () =>{
        setItems ([...items,{
            id: items.length,
            value: Math.floor(Math.random() * 10)+1
        }])
    };
  return (
    <div>
        <button onClick={addHandler}>Add item</button>
      <ul>
        {items.map((item)=> <li key={item.id}>{item.value}</li>)}
      </ul>
    </div>
  )
}

export default AddListItem
