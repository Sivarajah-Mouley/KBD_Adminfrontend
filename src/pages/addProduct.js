import React from "react";
import Top from "../components/Landing_items/landing_top";
import AddProduct from "../components/addProduct/addProduct";
import Menu from "../components/menubar/App";

function products() {
  return (
    <div>
      <Top />
      <AddProduct />
    </div>
  );
}

export default products;
