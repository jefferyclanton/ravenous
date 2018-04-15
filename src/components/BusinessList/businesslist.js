import React from 'react';
import './businesslist.css';
import Business from '../Business/business.js';

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
  <Business />
  <Business />
  <Business />
  <Business />
  <Business />
  <Business />
</div>
    )
  }
}

export default BusinessList;
