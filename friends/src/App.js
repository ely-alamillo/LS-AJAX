import React, { Component } from 'react';
import SiteHeader from './components/siteHeader';
import ShowFriends from './components/showFriends';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <SiteHeader />
      {/* <FriendsInput /> */}
      <ShowFriends />
      </div>
    );
  }
}

export default App;
