import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          LOGO
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarNav" aria-controls="navbarNav"
          aria-expanded="false" aria-label="Toggle navigation" >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse me-auto" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/admin">
                Admin
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/user">
                User
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/account">
                Account
              </Link>
            </li>
          </ul>
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                <Link className="nav-link" to="/login">
                    Login
                </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/register">
                    Register
                </Link>
                </li>
            </ul>

        </div>
        
      </div>
    </nav>
  );
}
export default NavBar;
