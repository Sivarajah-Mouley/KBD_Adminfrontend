import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";


import "./addEmployee.css";

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
    <div className="text-center mx-auto ">
      <form className="form col-6 mt-5  " onSubmit={handleSubmit}>
        <div className="title">Employee</div>
        <div className="subtitle"><NavLink className="text-white" to="/viewEmployee">
                {" "}
                view employee
              </NavLink></div>
        <div className="input-container ic1">
          <input
            id="firstname"
            className="input"
            type="text"
            placeholder=" "
            onChange={(e) => setName(e.target.value)}
          />
          <div className="cut"></div>
          <label for="firstname" className="placeholder">
            Employee name
          </label>
        </div>
        <div className="input-container ic2">
          <input
            id="lastname"
            className="input"
            type="email"
            placeholder=" "
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="cut"></div>
          <label for="lastname" className="placeholder">
            email
          </label>
        </div>
        <div className="input-container ic2">
          <input
            id="lastname"
            className="input"
            type="text"
            placeholder=" "
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          <div className="cut"></div>
          <label for="lastname" className="placeholder">
            phone number
          </label>
        </div>
        <div className="input-container ic2">
          <select
            id="email"
            className="input"
            onChange={(e) => setDevision(e.target.value)}
          >
            <option value="marketing">marketing</option>
            <option value="sales">sales</option>
            <option value="store">store</option>
            <option value="managemant">managemant</option>
          </select>
          <div className="cut cut-short"></div>
          <label for="email" className="placeholder">
            devision
          </label>
        </div>
        <div className="input-container ic2">
          <input
            id="email"
            className="input"
            type="text"
            placeholder=" "
            onChange={(e) => setAddress(e.target.value)}
          />
          <div className="cut cut-short"></div>
          <label for="email" className="placeholder">
            address
          </label>
        </div>
        <button type="text" className="submit">
          submit
        </button>
      </form>
    </div>
  );
}

export default Products;
