import React, { Component, useState } from "react";
import ProductList from "./ProductList";
const products = require("./products.json");

let uniqProducts = [];

(function () {
  for (let i = 0; i < products.length; i++) {
    if (uniqProducts.indexOf(products[i].manufacture) === -1) {
      uniqProducts.push(products[i].manufacture);
    }
  }
  return uniqProducts;
})();

class RadioControls extends Component {
  handleCheck = (event) => {
    this.props.onSet(event.target.value);
  };

  render() {
    return uniqProducts.map((products) => {
      return (
        <div>
          <input
            type="radio"
            name="manufacturere"
            id={products}
            value={products}
            checked={products.value}
            onChange={this.handleCheck}
          />
          <label htmlFor={products}>{products}</label>
        </div>
      );
    });
  }
}

function Catalog({ products }) {
  const [text, setText] = useState("All");
  return (
    <div className="container">
      <h1 className="header-big">Catalog</h1>

      <div className="catalog">
        <div className="column-left">
          <div className="filter">
            <div className="filter-header">
              <h4>Search</h4>
              <span className="clear">Clear</span>
            </div>
            <div>
              <input type="text" placeholder="search..." />
            </div>
            <h4>Manufacturer</h4>
            <div>
              <div>
                <input
                  type="radio"
                  name="manufacturere"
                  id="all"
                  value="All"
                  defaultChecked
                  onChange={(e) => setText(e.target.value)}
                />
                <label htmlFor="all">All</label>
              </div>

              <RadioControls onSet={(x) => setText(x)} />
            </div>
          </div>
        </div>
        <div className="column-right">
          <div className="products">
            <ProductList productName={text} products={products} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catalog;
