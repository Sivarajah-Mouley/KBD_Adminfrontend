import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import "./index.css";
import { NavLink } from "react-router-dom";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <nav className="nav nav-pills nav-justified">
      <a
        className="nav-item btn btn-primary mx-5 bg-light nav-link warning"
        
      >
        <NavLink to="/addProduct" >
          {" "}
          add Product
        </NavLink>
      </a>
      <a className="nav-item nav-link btn btn-primary mx-5 bg-light" href="#">
        <NavLink to="/addEmployee"> add User</NavLink>
      </a>
      <a className="nav-item nav-link btn btn-primary mx-5 bg-light" href="#">
        <NavLink to="/products"> view Products</NavLink>
      </a>
      {/* <a className="nav-item nav-link btn btn-primary mx-5 bg-light" href="#">
        <NavLink to="/promotion"> promotions</NavLink>
      </a> */}
      <a className="nav-item nav-link btn btn-primary mx-5 bg-light" href="#">
        <NavLink to="/addNotice"> notices</NavLink>
      </a>
    </nav>
  );
}

export default App;
