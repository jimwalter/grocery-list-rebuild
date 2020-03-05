import React from 'react';
import Form from './Form.jsx';
import GroceryList from './GroceryList.jsx';


class App extends React.Component{
  constructor(props) {
    console.log('App Constrcuted');
    super(props)
    this.state = {
      groceries: [
        {
          id: 1,
          name: "Frozen Blueberries",
          quantity: 2
        },
        {
          id: 2,
          name: "Frozen Mango",
          quantity: 2
        },
        {
          id: 3,
          name: "Bananas",
          quantity: 5
        },
        {
          id: 4,
          name: "Greek Yogurt",
          quantity: 1
        },
        {
          id: 5,
          name: "Spinach",
          quantity: 1
        }
      ]
    }

    this.addGroceryItem = this.addGroceryItem.bind(this);
  }

  componentDidMount() {
    console.log('App Mounted');
  }

  addGroceryItem(groceryObj) {
    groceryObj.id = this.state.groceries.length + 1;
    console.log("ADDING: ", groceryObj)
    let oldStateGroc = this.state.groceries;
    this.setState({
      groceries: oldStateGroc.concat(groceryObj)
    }, () => console.log(this.state))

  }

  render() {
    console.log('App Rendered');

    return (
      <div>
        <Form addGroceryItem={this.addGroceryItem} />
        <GroceryList groceries={this.state.groceries} />
      </div>
    )
  }
}


export default App;