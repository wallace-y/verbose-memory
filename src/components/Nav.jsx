import React from "react";
import "../css/Nav.css";

function Nav() {
  return (
    <nav class="navbar navbar-expand-md sticky-top border-bottom background-tertiary">
      <div class="container">
        <a class="navbar-brand d-md-none" href="#">
          <svg class="bi" width="24" height="24">
            <use xlink:href="#aperture"></use>
          </svg>
          Aperture
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvas"
          aria-controls="#offcanvas"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="#offcanvas"
          aria-labelledby="#offcanvasLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="#offcanvasLabel">
              Aperture
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav flex-grow-1 justify-content-between">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Classes
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
