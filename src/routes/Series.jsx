import { useContext, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import { movieContext } from "../context/Context";
import { useNavigate } from "react-router-dom";

function Series() {
  const [series, setSeries] = useState([]);
  const [error, setError] = useState("");
  const { movieActions } = useContext(movieContext);
  const navigate = useNavigate();

  useEffect(() => {
    const getSeries = async () => {
      const url =
        "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1";
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
        return setSeries(data.results);
      } catch (error) {
        return setError(error);
      }
    };

    getSeries();
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

  if (error) {
    return (
      <div className="container-fluid text-center mt-5">
        <h1 className="bg-danger p-3 rounded border">Error al cargar Series</h1>
      </div>
    );
  }

  return (
    <>
      <NavBar />
      <div className="container-fluid my-5 d-flex justify-content-evenly flex-wrap">
        {series ? (
          series.map((serie) => (
            <Card
              key={serie.id}
              votes={parseFloat(serie.vote_average.toFixed(2))}
              img={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
              title={serie.original_name}
              date={serie.first_air_date}
              params={() =>
                handleNavigateContext(
                  serie.id,
                  serie.original_language,
                  serie.original_title,
                  serie.overview,
                  serie.vote_count,
                  serie.backdrop_path,
                  serie.poster_path
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

export default Series;
