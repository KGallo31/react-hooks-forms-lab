import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items,setItems}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchBy,setSearchBy] = useState('')

  const handleSearchBy = e => {
    setSearchBy(e.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => 
  selectedCategory === "All" || item.category === selectedCategory)
  .filter((item) => item.name.toLowerCase().includes(searchBy.toLocaleLowerCase()))

  return (
    <div className="ShoppingList">
    <ItemForm props={items} setItems={setItems}/>
      <Filter onCategoryChange={handleCategoryChange} handleSearchBy={handleSearchBy} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
