import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="flex justify-between bg-gray-800 text-white p-4">
        <div className="flex">
          <a href="/" className="mr-4">
            Home
          </a>
          <a href="/memory" className="mr-4">
            Memory
          </a>
          <a href="/about" className="mr-4">
            About
          </a>
        </div>
        <div>
          <a href="/login" className="mr-4">
            Login
          </a>
          <a href="/register" className="mr-4">
            Register
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
