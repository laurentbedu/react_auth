import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function NavBar() {
  const { auth } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          LOGO
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse me-auto" id="navbarNav">
          <ul className="navbar-nav">
            {auth.role === 2 && (
              <li className="nav-item">
                <Link className="nav-link" to="/admin">
                  Admin
                </Link>
              </li>
            )}
            {auth.role === 1 && (
              <li className="nav-item">
                <Link className="nav-link" to="/user">
                  User
                </Link>
              </li>
            )}
            {auth.role > 0 && (
              <li className="nav-item">
                <Link className="nav-link" to="/account">
                  Account
                </Link>
              </li>
            )}
          </ul>
          <ul className="navbar-nav ms-auto">
            {auth.role === 0 && (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            )}
            {auth.role === 0 && (
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
            )}
            {auth.role > 0 && (
                <li className="nav-item">
                <Link className="nav-link" to="/logout">
                  Logout
                </Link>
                </li>
                
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
