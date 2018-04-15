import React from 'react';
import './searchbar.css';

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count"
}

class SearchBar extends React.Component {
  render() {
   return (
     <div className="SearchBar">
       <div className="SearchBar-sort-options">
         <ul>
           {this.renderSortByOptions()}
         </ul>
       </div>
       <div className="SearchBar-fields">
         <input placeholder="Search Businesses" onChange={this.handleTermChange} />
         <input placeholder="Where?" onChange={this.handleLocationChange} />
       </div>
       <div className="SearchBar-submit">
         <a>Let&#39;s Go</a>
       </div>
     </div>
   )
 }

export default SearchBar;
