import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-wrapper w-52 border-r-2">
      <div className="navbar-title text-center border-b-2 p-4 text-2xl">
        <h1>Budgeton</h1>
      </div>
      <ul className="navbar-items flex flex-col gap-2 text-center pt-20">
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/budgets'>
          <li>Budgets</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
