import React from 'react';
import Header from './Header.jsx';

class Form extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      quantity: ''
    }

    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

  }

  handleFormSubmit(event) {
    event.preventDefault();
    // console.log(this.props);
    // console.log('STATE: ', this.state);
    this.props.addGroceryItem(this.state);
  }


  handleFormChange(event) {
    let key = event.target.name;
    let value = event.target.value;
    this.setState({
      [key]: value
    })
  }


  render() {
    return(
      <div>
        <img src="grocery-bags.png"/>
        <Header />
          <form onSubmit={this.handleFormSubmit}>
            <label> Item
              <input name="name" onChange={this.handleFormChange} value={this.state.name}/>
            </label>
            <label> Qunatity
              <input name="quantity" onChange={this.handleFormChange} value={this.state.quantity}/>
            </label>
            <button>Add Grocery</button>
          </form>
      </div>
    )

  }
}

export default Form;