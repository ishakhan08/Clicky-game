//sets up the reusable cheese component
import React from "react";
import "./cheese.css";

//pass the image into each card so all 12 are rendered
const cheese = props => (
  <div className="card" onClick={props.imageClick}>
    <div className="img-container">
      <img id = "img" alt={props.image.replace(".jpg", "")} src={require("../../images/" + props.image)} />
    </div>
  </div>
);

export default cheese;