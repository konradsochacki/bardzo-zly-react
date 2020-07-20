import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "./products/ProductsActions";
import Catalog from "../catalog";

// import About from "../about.js";
// import Nav from "../nav.js";
// import Footer from "../footer.js";
// import Home from "../home.js";
// import Cart from "../cart";

function ProductsContainer({ productsData, fetchProducts }) {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log(productsData);
  return productsData.loading ? (
    <h2>Loading</h2>
  ) : productsData.error ? (
    <h2>{productsData.error}</h2>
  ) : (
    <div>
      <div>
        <Catalog products={productsData.products} />
        {/* {productsData.products.map((product) => {
          return <div>{product.name}</div>;
        })} */}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { productsData: state.products };
};

const mapDispatchToProps = (dispatch) => {
  return { fetchProducts: () => dispatch(fetchProducts()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
