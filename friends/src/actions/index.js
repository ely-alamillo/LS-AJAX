import axios from 'axios';
// import { dispatch } from 'react-redux';

export const getFriends = () => {
  const request = axios.get('http://localhost:5000/friends');
  return {
    type: 'GET_FRIENDS',
    payload: request,
  }
};

export const postFriend = (friend) => {
  const url = 'http://localhost:5000/new-friend'
  const postReq = axios.post(url, friend);
  console.log(postReq);
  // dispatch(getFriends());
  getFriends();
  // return {
  //   type: 'POST_FRIEND',
  //   payload: postReq,
  // }
}
