import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import style from "../styles/style.module.css";
import { AiTwotoneLike } from "react-icons/ai";
import { FaLanguage } from "react-icons/fa";
import { movieContext } from "../context/Context";
import { useContext, useEffect, useState } from "react";

function InfoMovie() {
  const navigate = useNavigate();
  const { movieActions } = useContext(movieContext);
  const { title } = useParams();
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (title) {
      const getMovie = async () => {
        const url = `https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=en-US&page=1`;
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTg0YWYzYWZmMjRjZmJlMDRlMDE3OTNkYWNmN2E4MSIsIm5iZiI6MTcyNTMxODY5MS44ODI0NTQsInN1YiI6IjY2Nzc3ZjA4MmUyNGViMDI4OWFhNTAyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Nga-9PotsNbiqsDF-LIUoCT36-sgBidR1W7MQSoctnw",
          },
        };
        try {
          const response = await fetch(url, options);
          if (!response.ok) {
            throw new Error({ msg: `${response.statusText}` });
          }
          const data = await response.json();
          return setMovie(data.results[0]);
        } catch (error) {
          return setError(error.message);
        }
      };
      getMovie();
    }
  }, [title]);

  const handleDeleteContext = () => {
    movieActions({ type: "remove" });
    navigate("/");
  };

  if (error) {
    return (
      <div className="container text-center ">
        <h1 className="bg-danger p-5 text-white fw-bold">{error}</h1>
      </div>
    );
  } else {
    console.log(movie);
  }

  return (
    <>
      <NavBar />
      {movie ? (
        <div className={style.container_info}>
          <div className={style.content_image}>
            <img
              className={style.image}
              src={
                movie.poster_path &&
                `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              }
              alt={movie.original_title && movie.original_title}
            />
          </div>
          <div className={style.content_text}>
            <div>
              <h1 className="text-center fw-bold">
                {movie.original_title && movie.original_title}
              </h1>
              <p className="mt-5">{movie.overview && movie.overview}</p>
            </div>
            <div className={style.content_data}>
              <h5>
                <FaLanguage size={30} />
                {movie.original_language && movie.original_language}
              </h5>
              <h5>
                <AiTwotoneLike /> {movie.vote_count && movie.vote_count}
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
