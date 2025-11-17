import React from "react";
import AptechLogo from "../assets/images/aptech-logo.png";
import { Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <Navbar
      fluid={false}
      rounded={false}
      menuOpen={false}
      className="fixed top-0 z-50 w-full bg-black text-white shadow sm:bg-black  sm:backdrop-blur-sm sm:p-2"
    >
      <Navbar.Brand href="/">
        <img
          src={AptechLogo}
          className="pointer-events-none mr-3 h-10 sm:h-12"
          alt="Flowbite Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="items-center sm:gap-2 sm:space-y-5">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "mx-auto my-1 w-fit text-aptechRed"
              : "inactive mx-auto my-1 w-fit"
          }
          reloadDocument
        >
          <span className="navlink rounded-md font-bold hover:text-aptechRed ">
            Home
          </span>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "mx-auto my-1 w-fit text-aptechRed"
              : "inactive mx-auto my-1 w-fit"
          }
          reloadDocument
        >
          <span className="navlink rounded-md font-bold hover:text-aptechRed">
            About
          </span>
        </NavLink>
        {/* <NavLink
          to="/gallery"
          className={({ isActive }) =>
            isActive
              ? "mx-auto my-1 w-fit text-aptechRed"
              : "inactive mx-auto my-1 w-fit"
          }
          reloadDocument
        >
          <span className="navlink rounded-md font-bold hover:text-aptechRed">
            Gallery
          </span>
        </NavLink> */}
        <NavLink
          to="/courses"
          className={({ isActive }) =>
            isActive
              ? "mx-auto my-1 w-fit text-aptechRed"
              : "inactive mx-auto my-1 w-fit"
          }
          reloadDocument
        >
          <span className="navlink rounded-md font-bold hover:text-aptechRed">
            Courses
          </span>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "mx-auto my-1 w-fit text-aptechRed"
              : "inactive mx-auto my-1 w-fit"
          }
          reloadDocument
        >
          <span className="navlink rounded-md font-bold hover:text-aptechRed">
            Contact
          </span>
        </NavLink>
        <NavLink to="/contact" reloadDocument>
          <span className="hidden rounded-md border-2 border-aptechRed p-2 text-md font-bold text-aptechRed hover:bg-aptechRed hover:text-white md:inline">
            Enroll Now
          </span>
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
