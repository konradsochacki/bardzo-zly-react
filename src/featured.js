import React from "react";
const product = require("./products.json");

const allFeatured = product
  .filter(function(value) {
    return value.featured === true;
  })
  .sort(function(a, b) {
    return 0.5 - Math.random();
  });

function Featured({ type, name }) {
  const category = allFeatured.filter(function(value) {
    return value.category === type;
  });

  return (
    <>
      <h2 className="header-small">{name}</h2>
      <div className="products">
        <div className="product">
          <img src={category[0].image} alt="Apple iMac 27 Retina" />
          <p className="price">{category[0].amount}</p>
          <h3>{category[0].name}</h3>
        </div>

        <div className="product">
          <img src={category[1].image} alt="Apple iMac 27 Retina" />
          <p className="price">{category[1].amount}</p>
          <h3>{category[1].name}</h3>
        </div>

        <div className="product">
          <img src={category[2].image} alt="Apple iMac 27 Retina" />
          <p className="price">{category[2].amount}</p>
          <h3>{category[2].name}</h3>
        </div>

        <div className="product">
          <img src={category[3].image} alt="Apple iMac 27 Retina" />
          <p className="price">{category[3].amount}</p>
          <h3>{category[3].name}</h3>
        </div>
      </div>
    </>
  );
}

export default Featured;
