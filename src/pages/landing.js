import React from "react";
import Landing_top from "../components/Landing_items/landing_top";
import Landing_middle from "../components/Landing_items/landing_middle";
import Get_started from "../components/Landing_items/get_started";

function landing() {
  return (
    <div>
      <Landing_top />
      <Landing_middle />
      <Get_started/>
    </div>
  );
}

export default landing;
