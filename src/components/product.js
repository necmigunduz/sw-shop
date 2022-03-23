import React, { Component } from "react";
import "../css/product.css";

class Product extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <img src={this.props.imgURL} alt={this.props.name} />
        <h2 className="card-header">{this.props.name}</h2>
        <p className="price">$ {this.props.price}</p>
        <button>Add to cart</button>
      </div>
    );
  }
}

export default Product;
