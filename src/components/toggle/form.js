import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Top from "../Landing_items/landing_top";

import "./formm.css";
import { Link } from "@mui/material";

function Products() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [devision, setDevision] = useState("");
  const [address, setAddress] = useState("");
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:5000/api/employee/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          firstName: name,
          lastName: name,
          phone: mobileNumber,
          address: address,
          division: devision,
        }),
      });
      let resJson = await res.json();
      console.log(resJson);
      if (res.status === 200) {
        setName("");
        setEmail("");
        alert("User created successfully");
      } else {
        alert("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <nav
      class="navbar  navbar-dark mb-3 "
      style={{ backgroundColor: "#15172b" }}
    >
      <NavLink to="/" class="navbar-brand">
        K.Bagesh Distributors
      </NavLink>
      
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse text-center" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              <NavLink className="text-white" to="/products">
                {" "}
                View Products
              </NavLink>
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">
              <NavLink className="text-white" to="/addProduct">
                {" "}
                Add Product
              </NavLink>
            </a>
          </li>
          <li class="nav-item active">
            {/* <a class="nav-link" href="#">
              <NavLink className="text-white" to="/addEmployee">
                {" "}
                Add Employee
              </NavLink>
            </a> */}
          </li>
          <li class="nav-item active">
            {/* <a class="nav-link" href="#">
              <NavLink className="text-white" to="/promotion">
                {" "}
                Promotions
              </NavLink>
            </a> */}
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">
              <NavLink className="text-white" to="/addNotice">
                {" "}
                Add notice
              </NavLink>
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">
              <NavLink className="text-white" to="/suggestions">
                {" "}
                Suggestions
              </NavLink>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Products;
