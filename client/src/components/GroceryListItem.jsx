import React from 'react';

const GroceryListItem = (props) => {
  return (
    <li>{props.grocery.name} <br></br>Qty: {props.grocery.quantity}</li>
  )
}

export default GroceryListItem;