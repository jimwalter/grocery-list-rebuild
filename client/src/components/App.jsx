import React from 'react';
import Form from './Form.jsx';
import GroceryList from './GroceryList.jsx';

import Groceries from '../groceryData.js';


class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      groceries: []
    }

    this.addGroceryItem = this.addGroceryItem.bind(this);
    this.getAllGroceryItems = this.getAllGroceryItems.bind(this);
  }


  componentDidMount() {
    this.getAllGroceryItems();
  }


  getAllGroceryItems(){
    fetch('http://localhost:3000/api/groceries')
    .then(response => response.json())
    .then(data => {
      this.setState({
        groceries: data
      });
    })
    .catch(err => console.log(err))
  }

  addGroceryItem(groceryObj) {
    this.getAllGroceryItems();
  }

  render() {
    return (
      <div>
        <Form addGroceryItem={this.addGroceryItem} />
        <GroceryList groceries={this.state.groceries} />
      </div>
    )
  }
}

export default App;