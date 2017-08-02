import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import axios from 'axios';
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
    event.preventDefault();
    this.props.postFriend(this.state);
    this.setState({
      name: '',
      age: '',
      email: '',
    })
    this.props.getFriends();
  }

  handleChangeName(event) {
    // console.log(event.target.value)
    this.setState({name: event.target.value})
  }

  handleChangeAge(event) {
    // console.log(event.target.value)
    this.setState({age: event.target.value})
  }

  handleChangeEmail(event) {
    // console.log(event.target.value)
    this.setState({email: event.target.value})

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.name} onChange={this.handleChangeName} name='firstName' type='text' placeholder='Enter your name...'></input>
          <input value={this.state.age} onChange={this.handleChangeAge} name='age' type='text' placeholder='Enter your age'></input>
          <input value={this.state.email} onChange={this.handleChangeEmail} name='email' type='text' placeholder='Enter your email'></input>
          <input type='submit' value='submit'></input>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { postFriend: postFriend,
    }, dispatch);
}

export default connect( null, mapDispatchToProps )(friendsInput);
// export default friendsInput;
