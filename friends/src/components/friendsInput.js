import React,  { Component } from 'react';
import axios from 'axios';
import { postFriend } from '../actions';

class friendsInput extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      email: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeAge = this.handleChangeAge.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
  }

  handleSubmit(event) {
    // console.log(postFriend)
    event.preventDefault();
    postFriend(this.state);
    this.setState({
      name: '',
      age: '',
      email: '',
    })
  }

  handleChangeName(event) {
    console.log(event.target.value)
    this.setState({name: event.target.value})
  }

  handleChangeAge(event) {
    console.log(event.target.value)
    this.setState({age: event.target.value})
  }

  handleChangeEmail(event) {
    console.log(event.target.value)
    this.setState({email: event.target.value})

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChangeName} name='firstName' type='text' placeholder='Enter your name...'></input>
          <input onChange={this.handleChangeAge} name='age' type='text' placeholder='Enter your age'></input>
          <input onChange={this.handleChangeEmail} name='email' type='text' placeholder='Enter your email'></input>
          <input type='submit' value='submit'></input>
        </form>
      </div>
    )
  }
}

export default friendsInput;
