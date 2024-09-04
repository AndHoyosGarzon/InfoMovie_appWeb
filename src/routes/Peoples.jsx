import { useContext, useEffect, useState } from "react";
import Card from "../components/Card";
import NavBar from "../components/NavBar";
import { movieContext } from "../context/Context";
import { useNavigate } from "react-router-dom";

function Peoples() {
  const [peoples, setPeoples] = useState([]);
  const [error, setError] = useState("");
  const { movieActions } = useContext(movieContext);
  const navigate = useNavigate();

  useEffect(() => {
    const getPeoples = async () => {
      const url =
        "https://api.themoviedb.org/3/trending/person/day?language=en-US";
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
        return setPeoples(data.results);
      } catch (error) {
        return setError(error);
      }
    };

    getPeoples();
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
        <h1 className="bg-danger p-3 rounded border">
          Error al cargar Peoples
        </h1>
      </div>
    );
  }

  console.log(peoples);

  return (
    <>
      <NavBar />
      <div className="container-fluid my-5 d-flex justify-content-evenly flex-wrap">
        {peoples ? (
          peoples.map((people) => (
            <Card
              key={people.id}
              votes={parseFloat(Math.floor(people.popularity))}
              img={`https://image.tmdb.org/t/p/w500${people.profile_path}`}
              title={people.name}
              date={people.known_for_department}
            />
          ))
        ) : (
          <div className="container text-center fw-bold">
            <h1>Loading Peoples...</h1>
          </div>
        )}
      </div>
    </>
  );
}

export default Peoples;
