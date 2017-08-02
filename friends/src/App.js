import React, { Component } from 'react';
import FriendsInput from './components/friendsInput';
import ShowFriends from './components/showFriends';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <FriendsInput />
        <ShowFriends />
      </div>
    );
  }
}

export default App;
