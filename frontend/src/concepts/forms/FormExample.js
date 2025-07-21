import React, { Component } from 'react';
import './App.css';
import PhoneForm from './lessons/day3/components/PhoneForm';

export default class FormExample extends Component {
  
  handleCreate = (data) => {
    console.log(data);
  }

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate}/>
      </div>
    );
  }
}