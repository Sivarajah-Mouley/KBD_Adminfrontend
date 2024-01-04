import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./products.css";
function Products() {
  const [products, setProducts] = useState("");
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  let deleteProduct = async (e, id) => {
    e.preventDefault();
    try {
      let res = await fetch(`http://localhost:5000/api/products/delete/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      let resJson = await res.json();
      console.log(resJson);
      if (res.status === 200) {
        alert("deleted succesfully");
      } else {
        alert("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="row container-lg mx-auto">
      {products
        ? products.map((product) => (
            <div id={product._id} className="col-3  my-3">
              <div
                class="card border border-secondary  rounded  text-center   "
                style={{ width: "18rem" }}
              >
                <img
                  src={product.imageUrl}
                  class="card-img-top text-center"
                  alt="..."
                  style={{
                    height: "200px",
                    width: "200px",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
                <div class="card-body">
                  <h5 class="card-title">{product.name}</h5>
                  <p class="card-text">{product.description}</p>
                  <h5>{product.countInStock} units available</h5>
                  <h3>LKR: {product.price}</h3>
                  <hr  style={{ backgroundColor: "#15172b" }}/>

                  <NavLink
                    className="btn text-white"
                    to={`/products/${product._id}`}
                    data={product}
                    style={{ backgroundColor: "#076575f8" }}
                  >
                    view
                  </NavLink>
                </div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
}

export default Products;
