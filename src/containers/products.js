import React, { Component } from "react";
import Product from "../components/product";
import "../css/products.css";
import { PRODUCTS_QUERY } from "../components/api/query";

class Products extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: []
    }
  }
  componentDidMount() {
    console.log(this.props);
    fetch("http://localhost:4000/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: PRODUCTS_QUERY }),
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ products: data.data.categories[0].products });
      })
      .catch((error) => console.log(error.message));
  }

  render() {
    return (
      <div>
        <ul className="products-container">
          {this.state.products.map((product, index) => (
            <li className="product-cart" key={product.id}>
              <Product
                id={product.id}
                name={product.name}
                imgURL={product.gallery[0]}
                price={product.prices[0].amount}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Products;
