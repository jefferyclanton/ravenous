import React from 'react';
import './App.css';
//import BusinessList from "./BusinessList/businesslist.js";
import BusinessList from './components/BusinessList/businesslist.js';
import SearchBar from "./components/SearchBar/searchbar.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
  <h1>ravenous</h1>
    <SearchBar />
    <BusinessList />
</div>
    );
  }
}

export default App;
