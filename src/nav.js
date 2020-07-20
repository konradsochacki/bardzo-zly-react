import React from "react";
import { Link } from "react-router-dom";
import Cart from "./graphics/Cart.png";

function Nav() {
  return (
    <nav className="navbar">
      <div className="container">
        <ul className="nav">
          <Link className="navLink" to="/">
            <li>Home Page</li>
          </Link>
          <Link className="navLink" to="/catalog">
            <li>Catalog</li>
          </Link>
          <Link className="navLink" to="/about">
            <li>About</li>
          </Link>
          <Link className="cart" to="/cart">
            <li>
              <img
                src={Cart}
                title="Check your Cart"
                width="25"
                height="25"
                alt="cart img"
              />
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
