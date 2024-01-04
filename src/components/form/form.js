import React from "react";
import { useState } from "react";

import "./form.css";

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
      <div class="pos-f-t">
        <div class="collapse" id="navbarToggleExternalContent">
          <div class="bg-dark p-4">
            <button type="button" class="btn glow-on-hover mx-5 ">
              Products
            </button>
            {/* <button type="button" class="btn glow-on-hover">
              Employees
            </button> */}
            {/* <button type="button" class="btn glow-on-hover mx-5 ">
              promotions
            </button> */}
            <button type="button" class="btn glow-on-hover">
              Notices
            </button>
          </div>
        </div>
        <nav class="navbar navbar-dark bg-dark">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Products;
