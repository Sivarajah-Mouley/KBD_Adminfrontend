import React from "react";
import { NavLink } from "react-router-dom";
import { Routes, Route, useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import "./singleItem.css";
function Single_Item(data) {
  let { id } = useParams();
  const [product, setproduct] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((res) => res.json())
      .then((json) => setproduct(json));
  }, []);

  let deleteProduct = async (e) => {
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
  const styles = {
    borderRight: "1px solid #15172b",
  };

  const Show_product = () => {
    return (
      <div
        class="card mb-3 col-6 container pb-5 pt-5"
        style={{ maxwidth: "540px" }}
      >
        <div class="row no-gutters">
          <div class="col-md-4" style={styles}>
            <img src={product.imageUrl} class="card-img" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <p class="text-center" style={{ fontSize: "20px" }}>
                {product.catagory}
              </p>
              <h5
                class="card-title text-center mb-3"
                style={{ fontSize: "30px" }}
              >
                {product.name}
              </h5>
              <p class="text-center" style={{ fontSize: "20px" }}>
                {product.description}
              </p>
              <p class="text-center" style={{ fontSize: "15px" }}>
                avaliable count : {product.countInStock}
              </p>
              <p class="text-center" style={{ fontSize: "20px" }}>
                price : LKR {product.price}
              </p>
            </div>
            <div>
              <NavLink
                to={`/products/editproduct/${product._id}`}
                data={product}
                class="btn  btn-sm btn-block col-6 mx-auto text-white mb-3"
                style={{ backgroundColor: "#076575f8" }}
              >
                update
              </NavLink>
            </div>
            <button
              class="btn  btn-sm btn-block col-6 mx-auto text-white mb-3"
              onClick={() => {
                deleteProduct();
              }}
              style={{ backgroundColor: "#076575f8" }}
            >
              delete
            </button>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div style={{ fontSize: "50px" }}>
      {product ? (
        <Show_product />
      ) : (
        <p className="container text-center">loading</p>
      )}
    </div>
  );
}

export default Single_Item;
