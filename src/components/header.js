import React, { Component } from "react";
import Cart from "./cart";

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <h2>
                Redux Shopping App
              </h2>
            </li>
            <li>
              <Cart />
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
