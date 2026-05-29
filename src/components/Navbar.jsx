import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black border-bottom border-secondary px-4">
      <div className="container-fluid">
        <Link className="navbar-brand text-lime fw-bold fs-3" to="/">
          F.T
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/programs">
                Programs
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/recipes">
                Recipes
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/policy">
                Policy
              </Link>
            </li>

            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <Link to="/signup" className="btn btn-lime">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;