// const products = require("./products.json");

// let uniqProducts = [];

// (function () {
//   for (let i = 0; i < products.length; i++) {
//     if (uniqProducts.indexOf(products[i].manufacture) == -1) {
//       uniqProducts.push(products[i].manufacture);
//     }
//   }
//   return uniqProducts;
// })();

// console.log(uniqProducts);

// import React, { Component } from "react";
// // import ProductList from "./ProductList";
// // import ProductRadio from "./ProductRadio";
// // const products = require("./products.json");

// let uniqProducts = [];

// (function () {
//   for (let i = 0; i < products.length; i++) {
//     if (uniqProducts.indexOf(products[i].manufacture) == -1) {
//       uniqProducts.push(products[i].manufacture);
//     }
//   }
//   return uniqProducts;
// })();

// function ProductList() {
//   return products
//     .filter(function (value) {
//       return value.manufacture === "Xiaomi";
//     })
//     .map((product) => {
//       return (
//         <div className="product">
//           <img src={product.image} alt="Product_image" />
//           <p className="price">{product.amount}</p>
//           <h3>{product.name}</h3>
//         </div>
//       );
//     });
// }

// class ProductRadio extends Component {
//   state = {
//     productName: "",
//   };

//   handleCheck = (event) => {
//     this.setState({ productName: event.target.value });
//   };

//   render() {
//     console.log(this.state.productName);
//     return uniqProducts.map((product) => {
//       return (
//         <div>
//           <input
//             type="radio"
//             name="manufacturere"
//             id={product}
//             value={product}
//             checked={product.value}
//             onChange={this.handleCheck}
//           />
//           <label htmlFor={product}>{product}</label>
//         </div>
//       );
//     });
//   }
// }

// function Catalog() {
//   return (
//     <div className="container">
//       <h1 className="header-big">Catalog</h1>

//       <div className="catalog">
//         <div className="column-left">
//           <div className="filter">
//             <div className="filter-header">
//               <h4>Search</h4>
//               <span className="clear">Clear</span>
//             </div>
//             <div>
//               <input type="text" placeholder="search..." />
//             </div>
//             <h4>Manufacturer</h4>
//             <div>
//               <div>
//                 <input
//                   type="radio"
//                   name="manufacturere"
//                   id="all"
//                   value="all"
//                   defaultChecked
//                   onChange={ProductList}
//                 />
//                 <label htmlFor="all">All</label>
//               </div>
//               <ProductRadio />
//             </div>
//           </div>
//         </div>

//         <div className="column-right">
//           <div className="products">
//             <ProductList />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Catalog;
