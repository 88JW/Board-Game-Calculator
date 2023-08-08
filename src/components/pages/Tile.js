import React from "react";
import { Link } from "react-router-dom";

function Tile(props) {
  return (
    <Link to={props.to} className="tile">
      <div className="tile-icon">{props.icon}</div>
      {/* <div className="tile-label">{props.label}</div> */}
    </Link>
  );
}

export default Tile;