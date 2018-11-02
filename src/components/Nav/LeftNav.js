import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const LeftNav = () => {
  return (
    <React.Fragment>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/fragments">Nested Fragments</Link>
        </li>
        <li className="nav-item">
          <Link to="/list">List</Link>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default LeftNav;
