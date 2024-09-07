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

  const [series, setSeries] = useState([]);
  const [errorSeries, setErrorSeries] = useState("");

  const [actors, setActors] = useState([]);
  const [errorActors, setErrorActors] = useState("");

  useEffect(() => {
    getData(urls.urlTrendingMovies, optionsHeaders, setMovies, setErrorMovies);
    getData(urls.urlTrendingSeries, optionsHeaders, setSeries, setErrorSeries);
    getData(urls.urlPopularActors, optionsHeaders, setActors, setErrorActors);
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-secondary">
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
                  login
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
      <div className="container-fluid my-5">
        <h6 className="text-center fw-bold text-secondary">Trending Movies</h6>
        <div className={style.content_section}>
          {movies &&
            movies.map((movie) => (
              <CardSections
                key={movie.id}
                img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                title={movie.original_title}
                date={movie.release_date}
              />
            ))}
          {errorMovies && <h1>{errorMovies}</h1>}
        </div>
        <div className="d-flex justify-content-center mt-2">
          <button
            onClick={() => navigate("/movies")}
            className="btn btn-sm fw-bold border btn-dark"
          >
            Go to movies
          </button>
        </div>
      </div>
      <div className="container-fluid my-5">
        <h6 className="text-center fw-bold text-secondary">Trending Series</h6>
        <div className={style.content_section}>
          {series &&
            series.map((serie) => (
              <CardSections
                key={serie.id}
                img={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                title={serie.name}
                date={serie.first_air_date}
              />
            ))}
          {errorSeries && <h1>{errorSeries}</h1>}
        </div>
        <div className="d-flex justify-content-center mt-2">
          <button
            onClick={() => navigate("/series")}
            className="btn btn-sm fw-bold border btn-dark"
          >
            Go to Series
          </button>
        </div>
      </div>
      <div className="container-fluid my-5">
        <h6 className="text-center fw-bold text-secondary">Popular Actors</h6>
        <div className={style.content_section}>
          {actors &&
            actors.map((actor) => (
              <CardSections
                key={actor.id}
                img={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                title={actor.name}
                date={actor.known_for_department}
              />
            ))}
          {errorActors && <h1>{errorActors}</h1>}
        </div>
        <div className="d-flex justify-content-center mt-2">
          <button
            onClick={() => navigate("/peoples")}
            className="btn btn-sm fw-bold border btn-dark"
          >
            Go to Actors
          </button>
        </div>
      </div>
    </>
  );
}

export default Landing;
