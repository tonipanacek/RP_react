import React, { Component } from 'react';
import Property from './property.jsx';
import Customer from './customer.jsx';

class Grundstuck extends Component {
  render() {
    return (
      <div className="grundstuck">
        <Property />
        <Customer />
      </div>
    )
  }
}

export default Grundstuck;
