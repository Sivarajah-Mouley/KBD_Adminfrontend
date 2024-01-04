import React from "react";
import "./landing_top.css";

function landing_middle() {
  return (
    <div>
      <div class="container-fluid text-center bg-grey middle">
        <h2>about us</h2>
        <br />
        <h4>look at our products</h4>
        <div class="row text-center mt-5">
          <div class="col-sm-4">
            <div class="thumbnail border border-success">
              <img
                src="vegetables.jpg"
                className="img-thumbnail size"
                alt="Paris"
                width="400"
                height="300"
              />
              <p>
                <strong>Paris</strong>
              </p>
              <p>Yes, we built Paris</p>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="thumbnail border border-success">
              <img
                src="fruits.jpg"
                alt="New York"
                className="img-thumbnail size"
                width="400"
                height="300"
              />
              <p>
                <strong>New York</strong>
              </p>
              <p>We built New York</p>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="thumbnail border border-success">
              <img
                src="grocery.jpg"
                alt="San Francisco"
                width="400"
                height="300"
                className="img-thumbnail size"
              />
              <p>
                <strong>San Francisco</strong>
              </p>
              <p>Yes, San Fran is ours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default landing_middle;
