import React from "react";
import "./login.css";
import { NavLink } from "react-router-dom";
function Login() {
  
  return (
    <div className="wrapper fadeInDown mt-5">
      <div id="formContent">
        <div className="fadeIn first">LOGIN</div>

        <form>
          <input
            type="text"
            id="login"
            className="fadeIn second"
            name="login"
            placeholder="login"
          />
          <input
            type="text"
            id="password"
            className="fadeIn third"
            name="login"
            placeholder="password"
          />
          <input type="submit" className="fadeIn fourth" value="Log In"  ></input>
        </form>

        <div id="formFooter">
          <a className="underlineHover" href="#">
            Forgot Password?
          </a>
        </div>
        <div id="formFooter">
          <a className="underlineHover" href="#">
            <NavLink to="/register"> create an account</NavLink>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
