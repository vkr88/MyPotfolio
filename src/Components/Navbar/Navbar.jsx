import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm h-12 fixed">
      {/* Navbar Start: Logo and Name */}
      <div className="navbar-start">
        <div className="flex items-center md:ml-30">
          <img
            src="https://t4.ftcdn.net/jpg/06/48/74/45/360_F_648744530_jbIm9vHc1EYmPDmiMx4c5DLNLvAwY3Aw.jpg"
            alt="Profile"
            className="h-12 w-12 rounded-2xl "
          />
          <div className="flex flex-col items-start p-2 w-2xs h-full">
            <a className="btn btn-ghost text-2xl md:text-xl ">Vikash Kumar </a>
            <p className="text-xl ml-5 mt-[-10px]">Web Developer</p>
          </div>
        </div>
      </div>

      {/* Navbar End: Hamburger Menu for Mobile */}
      <div className="navbar-end lg:hidden">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-10"
          >
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Navbar Center: Menu for Desktop */}
      <div className="navbar-center hidden lg:flex ml-56">
        <ul className="menu menu-horizontal px-1 text-xl font-semibold">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;