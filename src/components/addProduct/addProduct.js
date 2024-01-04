import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./addProduct.css";

function Products() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [count, setCount] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [catagory, setCatagory] = useState("");
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:5000/api/products/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          description: description,
          price: price,
          countInStock: count,
          imageUrl: imageUrl,
          catagory: catagory,
          Nprice:price,
        }),
      });
      let resJson = await res.json();
      console.log(resJson);
      if (res.status === 200) {
        alert("product added successfully");
      } else {
        alert("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="text-center mx-auto ">
    <div className='col-10 mx-auto m-2'style={{height:"100px"}}>
   <div className="title_ad p-2 mb-2 col-6 mx-auto">Products cupboard</div>
   </div>
   <form className="form2 col-4 mt-2 mb-2" onSubmit={handleSubmit}>
   <div className="subtitle">your new item here</div>
        <div className="input-container ic1">
          <input
            id="firstname"
            className="input"
            type="text"
            placeholder=" "
            onChange={(e) => setName(e.target.value)}
          />
          
          <label for="firstname" className="placeholder">
            Product title
          </label>
        </div>
        <div className="input-container ic2">
          <input
            id="lastname"
            className="input"
            type="number"
            min="1"
            placeholder=" "
            onChange={(e) => setCount(e.target.value)}
          />
          <label for="lastname" className="placeholder">
            quantity
          </label>
        </div>
        <div className="input-container ic2">
          <input
            id="lastname"
            className="input"
            type="text"
            placeholder=" "
            onChange={(e) => setDescription(e.target.value)}
          />
          <label for="lastname" className="placeholder">
            description
          </label>
        </div>
        <div className="input-container ic2">
          <input
            id="email"
            className="input"
            type="number"
            min="1"
            placeholder=" "
            onChange={(e) => setPrice(e.target.value)}
          />
          <label for="email" className="placeholder">
            price
          </label>
        </div>
        <div className="input-container ic2">
          <select
            id="lastname"
            className="input"
            type="text"
            placeholder=" "
            onChange={(e) => setCatagory(e.target.value)}
          >
            <option value="Vegetables">Medicine</option>
            <option value="Fruits">House holds</option>
            <option value="Groceries"> Baby Products</option>
            <option value="Other"> Other</option>
          </select>
          <label for="lastname" className="placeholder">
            {/* target audiance */}
          </label>
        </div>
        <div className="input-container ic2">
          <input
            id="email"
            className="input"
            type="text"
            placeholder=" "
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <label for="email" className="placeholder">
            imageUrl
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
