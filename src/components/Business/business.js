import React from 'react';
import ReactDOM from 'react-dom';
import './business.css';


class Business extends React.Component {
  render() {
    return (
      <div className="Business">
  <div className="image-container">
    <img src='https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg' alt=''/>
  </div>
  <h2>{this.name}</h2>
  <div className="Business-information">
    <div className="Business-address">
      <p>{this.address}</p>
      <p>{this.city}</p>
      <p>{this.state} {this.zipCode}</p>
    </div>
    <div className="Business-reviews">
      <h3>{this.category}</h3>
      <h3 className="rating">{this.rating} stars}</h3>
      <p>{this.reviews} reviews</p>
    </div>
  </div>
</div>
    )
  }
}

export default Business;
