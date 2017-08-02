import React, { Component } from 'react';
import FriendsInput from './friendsInput';
import { connect } from 'react-redux';
import { getFriends, deleteFriend } from '../actions';
// import axios from 'axios';

class showFriends extends Component {
  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    this.props.getFriends();
  }

  handleDelete(event) {
    event.preventDefault();
    this.props.deleteFriend(event.target.value);
    this.props.getFriends();
    // console.log(event.target.value)
  }

  render() {
    return (
      <div>
        <FriendsInput getFriends={this.props.getFriends}/>
        <ul>
          {
            this.props.friends.map((friend, index) => {
              return (
                <li key={index} className=''>
                  <p>{`Friend ${index+1}`}</p>
                  <p>{`Name: ${friend.name}`}</p>
                  <p>{`Age: ${friend.age}`}</p>
                  <p>{`Email: ${friend.email}`}</p>
                  <button value={index} onClick={this.handleDelete}>Delete</button>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends,
  }
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getFriends: getFriends,
//   }
// }


export default connect(mapStateToProps, { getFriends, deleteFriend })(showFriends)
