import { useEffect, useState } from "react";
import Card from "../components/Card";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import { getData } from "../js/fetch";
import { optionsHeaders, urls } from "../js/tools";
import Errors_data from "../components/Errors";

function Peoples() {
  const [peoples, setPeoples] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getData(urls.urlPeoples, optionsHeaders, setPeoples, setError);
  }, []);

  if (error) return <Errors_data />;

  
  return (
    <>
      <NavBar />
      <div className="container my-5 d-flex justify-content-evenly flex-wrap">
        {peoples ? (
          peoples.map((people) => (
            <Card
              key={people.id}
              votes={parseFloat(Math.floor(people.popularity))}
              img={`https://image.tmdb.org/t/p/w500${people.profile_path}`}
              title={people.name}
              date={people.known_for_department}
              params={() => navigate(`/info_actors/${people.id}`)}
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
