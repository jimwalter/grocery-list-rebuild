import React from 'react';
import Form from './Form.jsx';
import GroceryList from './GroceryList.jsx';

import Groceries from '../groceryData.js';


class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      groceries: Groceries
    }

    this.addGroceryItem = this.addGroceryItem.bind(this);
  }

  componentDidMount() {

  }

  addGroceryItem(groceryObj) {
    groceryObj.id = this.state.groceries.length + 1;
    let oldStateGroc = this.state.groceries;
    this.setState({
      groceries: oldStateGroc.concat(groceryObj)
    })
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