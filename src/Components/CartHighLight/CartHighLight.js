import React, { Component } from "react";

import { DataContext } from "../../Context/ProductContext/ProductContext";

export class CartHighLight extends Component {
  static contextType = DataContext;

  render() {
    const { cart } = this.context;
    return <>{cart.length}</>;
  }
}

export default CartHighLight;
