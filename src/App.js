import React from 'react';
import './App.css';
//import BusinessList from "./BusinessList/businesslist.js";
import BusinessList from './components/BusinessList/businesslist';
import SearchBar from './components/SearchBar/searchbar';
import Yelp from './util/yelp';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    };
    this.searchYelp.bind(this);
  }
  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then(businesses => {
      this.setState({
        businesses: businesses
      });
    });
  }

  render() {
    return (
      <div className="App">
  <h1>ravenous</h1>
  <SearchBar searchYelp={this.searchYelp} />
    <BusinessList businesses={this.state.businesses} />
</div>
    );
  }
}

export default App;
