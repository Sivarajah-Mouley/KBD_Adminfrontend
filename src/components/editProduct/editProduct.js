import React from "react";
import { Routes, Route, useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  let { id } = useParams();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [count, setCount] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [product, setproduct] = useState();
  const [newPrice,setNewPrice] = useState("")
  let deleteProduct = async (e) => {
    console.log("gskksks");
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

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((res) => res.json())
      .then((json) => setproduct(json));
  }, []);
  useEffect(() => {}, [product]);

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(`http://localhost:5000/api/products/update/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name ? name : product.name,
          description: description ? description : product.description,
          price: price ? price : product.price,
          countInStock: count ? count : product.count,
          imageUrl: imageUrl ? imageUrl : product.imageUrl,
          Nprice: newPrice? newPrice :product.newPrice
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
   <div className="title_ad p-2 mb-2 col-6 mx-auto">Edit Products </div>
   </div>
   <form className="form2 col-4 mt-2 mb-2" onSubmit={handleSubmit}>
   <div className="subtitle">update the details here</div>
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
          <div className="cut"></div>
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
          <div className="cut"></div>
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
          <div className="cut cut-short"></div>
          <label for="email" className="placeholder">
            price
          </label>
        </div>
        <div className="input-container ic2">
          <input
            id="email"
            className="input"
            type="number"
            min="1"
            placeholder=" "
            onChange={(e) => setNewPrice(e.target.value)}
          />
          <div className="cut cut-short"></div>
          <label for="email" className="placeholder">
            new price
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
          <div className="cut cut-short"></div>
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

export default App;
