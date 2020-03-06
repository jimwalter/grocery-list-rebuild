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
    this.clearForm = this.clearForm.bind(this);

  }



  handleFormSubmit(event) {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    }
    fetch('http://localhost:3000/api/groceries', options)
    .then(results => results.json())
    .then(data => {
      // console.log('this DATA: ', data)
      this.props.addGroceryItem(this.state);
      this.clearForm();
    })
    .catch(err => console.log(err));
  }


  handleFormChange(event) {
    let key = event.target.name;
    let value = event.target.value;
    this.setState({
      [key]: value
    })
  }

  clearForm(){
    this.setState({
      name: '',
      quantity: ''
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