import { useEffect, useState } from "react";
import CardMovie from "../components/CardMovie";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

function Landing() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function getMovies() {
      const url3 = "https://api.themoviedb.org/3/trending/all/day?language=en-US'"
      const url2 = "https://api.themoviedb.org/3/trending/movie/week?language=en-US"
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
        const response = await fetch(url2, options);
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

  movies ? console.log(movies) : console.log("Aun no hay movies");

  return (
    <>
      <NavBar />
      <div className="container my-5 d-flex justify-content-evenly flex-wrap">
        {movies &&
          movies.map((movie) => (
            <CardMovie
              key={movie.id}
              votes={parseFloat(movie.vote_average.toFixed(2))}
              img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              title={movie.original_title}
              date={movie.release_date}
              params={() =>
                navigate(
                  `/info-movie/${movie.id}/${movie.original_language}/${movie.original_title}/${movie.overview}/${movie.vote_count}${movie.backdrop_path}${movie.poster_path}`
                )
              }
            />
          ))}
      </div>
    </>
  );
}

export default Landing;
