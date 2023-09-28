import React from "react";
import logo from "../../Assets/brand_logo.png";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-body-light">
      <style>
    {`
      @media (max-width: 991.98px) { /* Apply styles for screens smaller than large (992px) */
        .navbar-nav .nav-item:hover {
          background-color: lightgray;
          border-left: 2px solid darkgray;
          padding-left: 5px;
        }

        .navbar-nav .nav-item:hover .nav-link {
          color: white !important;
        }
      }
    `}
  </style>
  <div className="container">
    <a class="navbar-brand" href="/">
      <img src={logo} alt="Bootstrap" width="76" height="42.75" />
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/">
            MENU
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            LOCATION
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            ABOUT
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            CONTACT
          </a>
        </li>
      </ul>
      <button className="btn btn-danger" type="submit">
        Search
      </button>
    </div>
  </div>
</nav>

    </>
  );
}

export default Navbar;
