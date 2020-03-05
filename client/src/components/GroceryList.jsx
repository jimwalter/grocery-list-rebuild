import React from 'react';
import GroceryListItem from './GroceryListItem.jsx';

const GroceryList = (props) => {
  return (
    <ul className="groceries">
      {props.groceries.map( (item) => {
        return <GroceryListItem key={item.id} grocery={item} />
      })}
    </ul>
  );
}

export default GroceryList;