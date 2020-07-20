import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "./style.css";

import About from "./about.js";
import Nav from "./nav.js";
// import Catalog from "./catalog.js";
import Footer from "./footer.js";
import Home from "./home.js";
import Cart from "./cart";
import { Provider } from "react-redux";
import store from "./redux/store";
import ProductsContainer from "./redux/ProductsContainer";

// import ProdList from "./ProdList";

function notfound() {
  return (
    <>
      <div className="notfound">
        <p>Page not found :(</p>
        <a href="/">
          <button className="myButton" href="/">
            Return to home page
          </button>
        </a>
      </div>
    </>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/catalog" component={ProductsContainer} />
            <Route path="/cart" component={Cart} />
            <Route component={notfound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
