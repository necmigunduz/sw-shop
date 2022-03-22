import React, { Component } from "react";

class Cart extends Component {
  state = {
    quantity: 5
  };

  render() {
    return (
      <div>
        <h3>Cart: {this.state.quantity} Items</h3>
      </div>
    );
  }
};

export default Cart;
