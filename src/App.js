import React from 'react';
import './App.css';
//import BusinessList from "./BusinessList/businesslist.js";
import BusinessList from './components/BusinessList/businesslist.js';
import SearchBar from "./components/SearchBar/searchbar.js";

const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Bordertown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

const businesses = [
  business,
  business,
  business,
  business,
  business,
  business,
];

class App extends React.Component {
  searchYelp(term, location, sortBy) {
    console.log('Searching Yelp for ' + term + ', ' + location + ', ' + sortBy)
  }

  render() {
    return (
      <div className="App">
  <h1>ravenous</h1>
    <SearchBar />
    <BusinessList businesses={businesses} />
    <SearchBar searchYelp={this.searchYelp} />
</div>
    );
  }
}

export default App;
