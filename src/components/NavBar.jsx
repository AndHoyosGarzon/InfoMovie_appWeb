import { BiSolidCameraMovie } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { movieContext } from "../context/Context";
import { useContext } from "react";

function NavBar() {
  const { movieActions } = useContext(movieContext);
  const navigate = useNavigate();

  const handleClick = () => {
    movieActions({ type: "remove" });
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a onClick={handleClick} className="navbar-brand fw-bold" href="#">
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
              <a
                onClick={() => navigate("/movies")}
                className="nav-link "
                aria-current="page"
                href="#"
              >
                Movies
              </a>
            </li>
            <li className="nav-item me-5">
              <a
                onClick={() => navigate("/series")}
                className="nav-link"
                href="#"
              >
                Series
              </a>
            </li>
            <li className="nav-item me-5">
              <a
                onClick={() => navigate("/peoples")}
                className="nav-link"
                href="#"
              >
                Peoples
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
