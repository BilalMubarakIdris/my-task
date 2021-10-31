import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
