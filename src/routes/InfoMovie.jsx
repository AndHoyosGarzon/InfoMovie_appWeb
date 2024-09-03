import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import style from "../styles/style.module.css";
import { AiTwotoneLike } from "react-icons/ai";
import { FaLanguage } from "react-icons/fa";
import { movieContext } from "../context/Context";
import { useContext, useEffect, useState } from "react";

function InfoMovie() {
  const navigate = useNavigate();
  const { movie, movieActions } = useContext(movieContext);
  const [movieData, setMovieData] = useState([]);

  const { id } = useParams();

  const dataMovie = sessionStorage.getItem("movie");
  const objMovie = JSON.parse(dataMovie);

  const handleDeleteContext = () => {
    // setMovieData([]);
    movieActions({ type: "remove" });
    navigate("/");
    sessionStorage.clear();
  };

  return (
    <>
      <NavBar />
      {objMovie && (
        <div className={style.container_info}>
          <div className={style.content_image}>
            <img
              className={style.image}
              src={
                objMovie.poster &&
                `https://image.tmdb.org/t/p/w500/${objMovie.poster}`
              }
              alt={objMovie.title && objMovie.title}
            />
          </div>
          <div className={style.content_text}>
            <div>
              <h1 className="text-center fw-bold">
                {objMovie.title && objMovie.title}
              </h1>
              <p className="mt-5">{objMovie.overview && objMovie.overview}</p>
            </div>
            <div className={style.content_data}>
              <h5>
                <FaLanguage size={30} />{" "}
                {objMovie.language && objMovie.language}
              </h5>
              <h5>
                <AiTwotoneLike /> {objMovie.vote && objMovie.vote}
              </h5>
            </div>
            <div className="container d-flex justify-content-center mb-5">
              <button
                onClick={() => handleDeleteContext()}
                className="btn btn-sm fw-bold btn-primary"
              >
                Go to Home
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default InfoMovie;
