import { Link, NavLink } from "react-router";

const Navbar = () => {
  const navLinks = (
    <>
      <li className="">
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-bold"
          >
            {navLinks}
          </ul>
        </div>

        <NavLink
          to="/"
          className="text-2xl md:text-4xl font-bold text-gradient"
        >
          StyleDecor
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">{navLinks}</ul>
      </div>
      <div className="dropdown dropdown-end navbar-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img src="https://i.pravatar.cc/100" alt="user" />
          </div>
        </div>
        <ul
          tabIndex="-1"
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-32 w-52 p-2 shadow font-semibold"
        >
          <li>
            <Link to="">Dashboard</Link>
          </li>
          <li>
            <Link to="">Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
