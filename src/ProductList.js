import React, { Component } from "react";

class ProductList extends Component {
  render() {
    return this.props.products
      .filter((product) => {
        if (this.props.productName === "All") {
          return true;
        }
        return product.manufacture === this.props.productName;
      })
      .map((product) => {
        return (
          <div className="product">
            <img src={product.image} alt="Product_image" />
            <p className="price">{product.amount}</p>
            <h3>{product.name}</h3>
            <button className="cartButton">Add to cart</button>
          </div>
        );
      });
  }
}

export default ProductList;
