import React, { Component } from 'react';
import Grundstuck from './grundstuck.jsx';
import CustomerList from './customer_list.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customers: [
        { id: 1, anrede: 'Frau', vorname: 'Lisa', nachname: 'Gerlach', telefon: '015213457896', email: 'lisa@web.de'}
      ],
      selectedCustomerId: 1
    }
  }

  selectCustomer = (id) => {
    this.setState({
      selectedCustomerId: id
    });
  }

  render() {
    return (
      <div>
        <h1>Hello Toni</h1>
        <Grundstuck />
      </div>
      )
  }
}

export default App;
