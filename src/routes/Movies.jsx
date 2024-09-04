import { useEffect, useState, useContext } from "react";
import Card from "../components/Card";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import { movieContext } from "../context/Context";
import { getData } from "../js/fetch";
import { optionsHeaders, urls } from "../js/tools";
import Errors_data from "../components/Errors";

function Movies() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { movieActions } = useContext(movieContext);

  useEffect(() => {
    getData(urls.urlMovies, optionsHeaders, setMovies, setError);
  }, []);

  const handleNavigateContext = (
    id,
    language,
    title,
    overview,
    vote,
    backdrop,
    poster
  ) => {
    const addMovie = { id, language, title, overview, vote, backdrop, poster };
    movieActions({ type: "add", payload: addMovie });
    navigate(`/info`);
  };

  if (error) return <Errors_data />;

  return (
    <>
      <NavBar />
      <div className="container-fluid my-5 d-flex justify-content-evenly flex-wrap">
        {movies ? (
          movies.map((movie) => (
            <Card
              key={movie.id}
              votes={Math.floor(movie.vote_average)}
              img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              title={movie.original_title}
              date={movie.release_date}
              params={() =>
                handleNavigateContext(
                  movie.id,
                  movie.original_language,
                  movie.original_title,
                  movie.overview,
                  movie.vote_count,
                  movie.backdrop_path,
                  movie.poster_path
                )
              }
            />
          ))
        ) : (
          <div className="container text-center fw-bold">
            <h1>Loading Movies...</h1>
          </div>
        )}
      </div>
    </>
  );
}

export default Movies;
