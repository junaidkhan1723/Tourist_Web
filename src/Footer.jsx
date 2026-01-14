import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <div>
      <footer className="bg-primary text-white py-3 mt-3">
        <div className="container">
          <div className="row text-center text-md-start">
            <div className="col-md-5 mb-3">
              <h5 className="fw-bold">JK Tourist</h5>
              <p>Your trusted travel guide across India's top destinations.</p>
            </div>

            <div className="col-md-4 mb-3">
              <h5 className="fw-bold">Info</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Destinations
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                  Contact Us 
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-4">
              <h5 className="fw-bold">Follow Us</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <hr className="border-secondary " />

          <div className="bg-white text-center text-muted small">
            &copy; 2025 JK Tourist. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
