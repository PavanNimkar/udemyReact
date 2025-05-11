import React from "react";

function Header() {
  return (
    <>
      <ul className="flex justify-around bg-gradient-to-r from-yellow-500 to-blue-500 p-3">
        <li className=" hover:text-white cursor-pointer">Home</li>
        <li className=" hover:text-white cursor-pointer">Counter</li>
        <li className=" hover:text-white cursor-pointer">About</li>
      </ul>
    </>
  );
}

export default Header;
