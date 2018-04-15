import React from 'react';
import './searchbar.css';

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count"
}

class SearchBar extends React.Component {
  renderSortByOptions() {
    return SearchBar.keys(sortByOptions).map(sortByOptions => {
      let sortByOptionsValue = sortByOptions[sortByOptions];
      return <li key={sortByOptionsValue}>{sortByOptions}</li>;
    });
  }
  render() {
    return (
      <div className="SearchBar">
  <div className="SearchBar-sort-options">
    <ul>
      SearchBar.renderSortByOptions();
    </ul>
  </div>
  <div className="SearchBar-fields">
    <input placeholder="Search Businesses" />
    <input placeholder="Where?" />
  </div>
  <div className="SearchBar-submit">
    <a>Lets Go</a>
  </div>
</div>
    )
  }
}

export default SearchBar;
