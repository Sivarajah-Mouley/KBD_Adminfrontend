import React from "react";
import { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import "./login.css";
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase";

import { useNavigate, Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
function Register() {
  const [email, setEmail] = useState("");
  const [fName, setFname] = useState("");
  const [phone, setPhone] = useState("");
  const [lName, setLName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [devison, setDevison] = useState("");
  const [address, setAddress] = useState("");
  useEffect(() => {
    console.log(devison);
  }, [devison]);
  const print = () => {
    console.log("done ");
  };
  const add = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      mode: "no-cors",
      headers: {
        "access-control-allow-origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fName: "fNamefffff",
        lName: "lNamefffff",
        email: "emailffffff",
        phone: "phonefffff",
        address: "addressfffff",
      }),
    };
    fetch("http://localhost:5000/api/employee/add", requestOptions).then(
      (response) => console.log(response)
    );
  };

  // const validatePassword = () => {
  //   let isValid = true;
  //   if (password !== "" && confirmPassword !== "") {
  //     if (password !== confirmPassword) {
  //       isValid = false;
  //       setError("Passwords does not match");
  //     }
  //   }
  //   return isValid;
  // };
  // const register = (e) => {
  //   e.preventDefault();
  //   setError("");
  //   if (true) {
  //     // Create a new user with email and password using firebase
  //     createUserWithEmailAndPassword(auth, email, password)
  //       .then(() => {
  //         sendEmailVerification(auth.currentUser)
  //           .then(() => {
  //             console.log("done");
  //           })
  //           .catch((err) => alert(err.message));
  //       })
  //       .catch((err) => setError(err.message));
  //   }
  //   setEmail("");
  //   setPassword("");
  //   setConfirmPassword("");
  // };
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:5000/api/employee/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fName: fName,
          lName: lName,
          email: email,
          phone: phone,
          address: address,
          division: devison,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setFname("");
        setEmail("");
        alert("User created successfully");
      } else {
        alert("User creation failed Some error occured");
      }
    } catch (err) {
      console.log(err);
      alert("User error");
    }
  };

  return (
    <div className="wrapper fadeInDown mt-2">
      <div id="formContent">
        {/* <div className="fadeIn first h1 mb-5">Add Employee</div> */}

        <form onSubmit={add}>
          <div className="row">
            <input
              //required
              type="text"
              id="login"
              className="fadeIn second mt-2 col mx-5"
              name="login"
              placeholder="first name"
              onChange={(e) => setFname(e.target.value)}
            />
            <input
              //required
              type="text"
              id="login"
              className="fadeIn second mt-2 col mx-5"
              name="login"
              placeholder="last name"
              onChange={(e) => setLName(e.target.value)}
            />
          </div>

          <input
            //required
            type="text"
            id="login"
            className="fadeIn second mt-2"
            name="login"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            //required
            type="text"
            id="phone"
            className="fadeIn second mt-2"
            name="login"
            placeholder="phone"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <select
            className="form-select fadeIn third mt-2 col-6 mx-auto h5"
            onChange={(e) => setDevison(e.target.value)}
          >
            {/* <option selected>add the role to the employee</option> */}
            <option value="marketing">marketing </option>
            <option value="marketing">marketing</option>
            <option value="technical">technical</option>
            <option value="minor staff">minor staff</option>
          </select>
          <input
            type="text"
            //required
            id="password"
            className="fadeIn third mt-2"
            name="login"
            placeholder="address"
          />
          <input
            type="text"
            //required
            id="password"
            className="fadeIn third mt-2"
            name="login"
            placeholder="address"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          <input type="submit" className=" btn btn-success mt-2 " />
        </form>

        <div id="formFooter">
          <a className="underlineHover" href="#">
            help
          </a>
        </div>
        <div id="formFooter">
          <a className="underlineHover" href="#">
            <NavLink to="/login"> go to login </NavLink>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Register;
