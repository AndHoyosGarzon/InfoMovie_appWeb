import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import { getData } from "../js/fetch";
import { optionsHeaders, urls } from "../js/tools";
import Errors_data from "../components/Errors";

function Series() {
  const [series, setSeries] = useState([]);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getData(urls.urlSeries, optionsHeaders, setSeries, setError);
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
    navigate(
      `/info/${id}/${language}/${title}/${overview}/${vote}${backdrop}${poster}`
    );
  };

  if (error) return <Errors_data />;

  
  return (
    <>
      <NavBar />
      <div className="container my-5 d-flex justify-content-evenly flex-wrap">
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
                  serie.original_name,
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
