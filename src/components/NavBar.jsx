import { BiSolidCameraMovie } from "react-icons/bi";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#">
          Movies <BiSolidCameraMovie />
        </a>
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
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav fw-bold">
            <li className="nav-item me-5">
              <a className="nav-link " aria-current="page" href="#">
                Peliculas
              </a>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link" href="#">
                Series
              </a>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link" href="#">
                Gente
              </a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link " href="#">
                Mas
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
