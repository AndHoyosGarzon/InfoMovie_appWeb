import { useEffect, useState, useContext } from "react";
import CardMovie from "../components/CardMovie";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import { movieContext } from "../context/Context";

function Landing() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { movieActions } = useContext(movieContext);

  useEffect(() => {
    async function getMovies() {
      const url =
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
      const options = {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTg0YWYzYWZmMjRjZmJlMDRlMDE3OTNkYWNmN2E4MSIsIm5iZiI6MTcyNTMxODY5MS44ODI0NTQsInN1YiI6IjY2Nzc3ZjA4MmUyNGViMDI4OWFhNTAyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Nga-9PotsNbiqsDF-LIUoCT36-sgBidR1W7MQSoctnw",
          "Content-Type": "application/json",
        },
      };
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error({ msg: `${response.statusText}` });
        }

        const data = await response.json();
        return setMovies(data.results);
      } catch (error) {
        return setError(error);
      }
    }
    getMovies();
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

    navigate(`/info-movie`);
  };

  if (error) {
    return (
      <div className="container-fluid text-center mt-5">
        <h1 className="bg-danger p-3 rounded border">
          Error al cargar los datos
        </h1>
      </div>
    );
  }

  return (
    <>
      <NavBar />
      <div className="container my-5 d-flex justify-content-evenly flex-wrap">
        {movies ? (
          movies.map((movie) => (
            <CardMovie
              key={movie.id}
              votes={parseFloat(movie.vote_average.toFixed(2))}
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

export default Landing;
