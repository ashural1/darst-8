import React from "react";
import { Link } from "react-router-dom";
function NavbarLinks() {
  return (
    <>
      <li>
        <Link className="" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="" to="/contact">
          Contact
        </Link>
      </li>
      {/* <li>
        <Link className="" to="/card">
          Card
        </Link>
      </li> */}
    </>
  );
}

export default NavbarLinks;
