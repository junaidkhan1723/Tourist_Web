import React from "react";
import siteLogo from "./images/TouristLogo1.png";

function Header() {
  return (
    <div className="headerbar">
      <nav className=" navbar navbar-expand-sm bg-primary navbar-dark justify-content-spacebetween">
        <div className="container-fluid col ">
          <a className="navbar-brand" href="#">
            <img
              src={siteLogo}
              alt="logo"
              style={{ width: 40 }}
              className="rounded"
            />
            <span
              style={{
                fontSize: "1.3em",
                fontWeight: "bolder",
                marginLeft: 10,
                fontFamily: "Cascadia Code",
                letterSpacing: "0.3em",
              }}
            >
              JK Tourist
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon icon"></span>
          </button>
          <div
            className=" headerList collapse navbar-collapse justify-content-end"
            id="collapsibleNavbar"
          >
            <ul className=" navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link"
                  dropdown-toggle
                  data-bs-toggle="dropdown"
                  href="#"
                >
                  Home
                </a>
                <ul class="dropdown-menu ">
                  <li>
                    <a class="dropdown-item" href="#">
                      Normal
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item active" href="#">
                      Active
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item disabled" href="#">
                      Disabled
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Places
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#Agra">
                      Agra
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#Delhi">
                      Dehli
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#Hydrabad">
                      Hydrabad
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#Goa">
                      Goa
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Ajmer
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Pune
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
