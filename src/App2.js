import React, { Component } from 'react';
import './App.css';
import PhoneForm from './component/day3/PhoneForm';

export default class App2 extends Component {
  
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