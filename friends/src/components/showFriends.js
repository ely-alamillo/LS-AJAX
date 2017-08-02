import React, { Component } from 'react';
import FriendsInput from './friendsInput';
import { connect } from 'react-redux';
import { getFriends, deleteFriend } from '../actions';

import './showFriends.css';
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
    this.props.deleteFriend(parseInt(event.target.value, 10));
    this.props.getFriends();
    // console.log(parseInt(event.target.value, 10))
  }


  render() {
    return (
      <div>
        <FriendsInput getFriends={this.props.getFriends}/>
        <div className='container panel panel-primary '>
          <h1 className='text-left header-font'> My Friends </h1>
          <hr />
          <table className='table table-condensed'>
            <thead>
              <tr>
                <th className='text-center'>Friend #</th>
                <th className='text-center'>Name</th>
                <th className='text-center'>Age</th>
                <th className='text-center email'>Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            {
              this.props.friends.map((friend, index) => {
                return (
                  <tr key={index}>
                    <td className='text-center'>{index + 1}</td>
                    <td className='text-center'>{friend.name}</td>
                    <td className='text-center'>{friend.age}</td>
                    <td className='text-center'>{friend.email} </td>
                    <td><button className='btn btn-danger' value={index} onClick={this.handleDelete}>Delete</button></td>
                  </tr>
                )
              })
            }
            </tbody>
          </table>
        </div>
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
