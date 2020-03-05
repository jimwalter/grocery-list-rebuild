import React from 'react';
import Header from './Header.jsx';

class Form extends React.Component{

  constructor(props) {
    console.log('Form Constructed');
    super(props)
    this.state = {
      name: '',
      quantity: ''
    }
  }

  componentDidMount() {
    console.log('Form Mounted');
  }

  render() {
    console.log('Form Rendered');

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