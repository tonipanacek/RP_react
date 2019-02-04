import React, { Component } from 'react';

const CustomerList = (props) => {
  return (
    <div className="customer-list">
      {props.customers.map(customer => <button id={customer.id} key={customer.id} selectCustomer={props.selectCustomer}>{customer.vorname}</button>)}
    </div>
  )
}

export default CustomerList;
