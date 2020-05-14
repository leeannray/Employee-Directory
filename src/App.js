import React from 'react';
import './App.css';

import UserList from './components/UserCard/UserList';
import SearchBar from './components/SearchBar/SearchBar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Employee Directory</h1>
        <SearchBar />
        <BusinessList />
      </div>
    );
  }
}

export default App;