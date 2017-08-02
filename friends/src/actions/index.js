import axios from 'axios';
// import dispatch from 'react-redux';

export const getFriends = () => {
  const request = axios.get('http://localhost:5000/friends');
  return {
    type: 'GET_FRIENDS',
    payload: request,
  }
};

export const postFriend = (friend) => {
  const url = 'http://localhost:5000/new-friend'
  const postReq = axios.post(url, friend)
  return {
    type: 'GET_FRIENDS',
    payload: postReq,
  }
}

export const deleteFriend = (friend) => {
  const url = 'http://localhost:5000/delete-friend';
  const deleteReq = axios.delete(url, friend)
  return {
    type: 'GET_FRIENDS',
    payload: deleteReq,
  }
}
