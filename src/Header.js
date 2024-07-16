import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  // Check if a specific user is logged in (replace with your specific logic)
  const isLoggedIn = localStorage.getItem("users") !== null;

  const handleLogout = () => {
    localStorage.removeItem("users");
    // Redirect to home page after logout
    navigate("/");
  };

  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <span className="fs-4">Library Management App</span>
        </a>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/catalog" className="nav-link">
              Catalog
            </Link>
          </li>
          {/* Conditional rendering for Signup/Logout */}
          <li className="nav-item">
            {isLoggedIn ? (
              <button className="nav-link btn btn-link" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <Link to="/signup" className="nav-link">
                Signup
              </Link>
            )}
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
