import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import style from "../styles/style.module.css";
import { AiTwotoneLike } from "react-icons/ai";
import { FaLanguage } from "react-icons/fa";
import { movieContext } from "../context/Context";
import { useContext } from "react";

function InfoMovie() {
  const navigate = useNavigate();
  const { movie, movieActions } = useContext(movieContext);

  const handleDeleteContext = () => {
    movieActions({ type: "remove" });
    navigate("/");
  };

  return (
    <>
      <NavBar />
      {movie[0] ? (
        <div className={style.container_info}>
          <div className={style.content_image}>
            <img
              className={style.image}
              src={
                movie[0].poster &&
                `https://image.tmdb.org/t/p/w500/${movie[0].poster}`
              }
              alt={movie[0].title && movie[0].title}
            />
          </div>
          <div className={style.content_text}>
            <div>
              <h1 className="text-center fw-bold">
                {movie[0].title && movie[0].title}
              </h1>
              <p className="mt-5">{movie[0].overview && movie[0].overview}</p>
            </div>
            <div className={style.content_data}>
              <h5>
                <FaLanguage size={30} />
                {movie[0].language && movie[0].language}
              </h5>
              <h5>
                <AiTwotoneLike /> {movie[0].vote && movie[0].vote}
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
      ) : (
        <div className="container text-center fw-bold">
          <h1>Loading Movie...</h1>
        </div>
      )}
    </>
  );
}

export default InfoMovie;
