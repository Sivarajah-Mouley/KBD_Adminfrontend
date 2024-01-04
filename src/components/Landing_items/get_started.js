import React from "react";
import { NavLink } from "react-router-dom";
function get_started() {
  return (
    <div>
      <div className=" text-center">
        <button type="button" className="btn btn-success mt-5 mb-5">
            <NavLink to="/login"> get started </NavLink>
        </button>
      </div>
    </div>
  );
}

export default get_started;
