import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

function Navbar() {
  return (
    <div className="bg-blue-900 flex w-full h-24 justify-center  items-center">
      <div className="shadow bg-teal-700 hover:bg-blue-400 mr-24 w-32 h-11 py-2 px-4 rounded text-white font-bold focus:outline-none focus:shadow-outline ">
        <Link to="/">Home Page</Link>
      </div>
      <div className="shadow bg-teal-700 hover:bg-blue-400 ml-24 w-36 h-11 py-2 px-4 rounded text-white font-bold focus:outline-none focus:shadow-outline ">
        <Link to="/form">Book An Appointment</Link>
      </div>
    </div>
  );
}

export default Navbar;
