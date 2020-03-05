import React from 'react';
import Header from './Header.jsx';

class Form extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      quantity: ''
    }
  }


  render() {
    return(
      <div>
        <img src="grocery-bags.png"/>
        <Header />
          <form>
            <label> Item
              <input name="item" value=""/>
            </label>
            <label> Qunatity
              <input name="quantity" value=""/>
            </label>
            <button>Add Grocery</button>
          </form>
      </div>
    )

  }
}

export default Form;