import React from "react";
import Featured from "./featured";

function Home() {
  return (
    <div className="container">
      <h1 className="header-big">Welcome to our store</h1>
      <Featured type="desktop" name="Desktops" />
      <Featured type="tablet" name="Tablets" />
    </div>
  );
}

export default Home;
