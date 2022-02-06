import React,{useState} from "react";
import { v4 as uuid } from "uuid";
import Item from "./Item";

function ItemForm({props,setItems}) {
  const [itemName,setItemName] = useState('')
  const [catName,setCatName] = useState('Produce')

  const changeItemName = e => {
    setItemName(e.target.value)
  }

  const changeCatName = e => {
    setCatName(e.target.value)
  }

  const onItemFormSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: itemName,
      category: catName,
    };
    const newArr = [...props,newItem]
    setItems(newArr)
    console.log(props);
  }


  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input type="text" onChange={changeItemName} name="name" />
      </label>

      <label>
        Category:
        <select name="category" onChange={changeCatName}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
