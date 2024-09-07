import { BiSolidCameraMovie } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import CardSections from "../components/CardSections";
import { useEffect, useState } from "react";
import { getData } from "../js/fetch";
import { urls, optionsHeaders } from "../js/tools";
import style from "../styles/style.module.css";

function Landing() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [errorMovies, setErrorMovies] = useState("");

  useEffect(() => {
    getData(urls.urlMovies, optionsHeaders, setMovies, setErrorMovies);
  }, []);

  console.log(movies);

  return (
    <>
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
              <li className="nav-item me-2">
                <a
                  onClick={() => navigate("/login")}
                  className="nav-link "
                  aria-current="page"
                  href="#"
                >
                  Login
                </a>
              </li>
              <li className="nav-item ">
                <a
                  onClick={() => navigate("/register")}
                  className="nav-link"
                  href="#"
                >
                  register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container my-5">
        <h2 className="fw-bold text-secondary">Trending Movies</h2>
        <div className={style.content_section}>
          {movies &&
            movies.map((movie) => (
              <CardSections 
              key={movie.id} 
              img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              title={movie.original_title} />
            ))}
        </div>
        {/*  <button className="btn btn-primary btn-sm fw-bold">See more</button> */}
      </div>
    </>
  );
}

export default Landing;
