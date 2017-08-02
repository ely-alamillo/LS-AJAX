import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../actions';
import axios from 'axios';

class showFriends extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.props.friends.map((friend, index) => {
              return (
                <li key={index}>
                  <p>{`Friend ${index+1}`}</p>
                  <p>{`Name: ${friend.name}`}</p>
                  <p>{`Age: ${friend.age}`}</p>
                  <p>{`Email: ${friend.email}`}</p>
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


export default connect(mapStateToProps, { getFriends })(showFriends)
