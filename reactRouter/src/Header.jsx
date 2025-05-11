import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <ul className="flex justify-around bg-gradient-to-r from-yellow-500 to-blue-500 p-3">
        <Link to="/">
          <li className=" hover:text-white cursor-pointer">Home</li>
        </Link>
        <Link to="/about">
          <li className=" hover:text-white cursor-pointer">About</li>
        </Link>
      </ul>
    </>
  );
}

export default Header;
