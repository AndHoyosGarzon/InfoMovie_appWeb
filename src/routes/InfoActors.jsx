import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getActors } from "../js/fetch";
import { optionsHeaders } from "../js/tools";
import NavBar from "../components/NavBar";

function InfoActors() {
  const [actor, setActor] = useState([]);
  const [error, setError] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const url = `https://api.themoviedb.org/3/person/${id}`;
      getActors(url, optionsHeaders, setActor, setError);
    }
  }, [id]);

  console.log(actor);
  return (
    <>
      <NavBar />
      <div >
        <h1>{actor.name}</h1>
        <img
          src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
          alt={actor.name}
        />
        <p>{actor.biography}</p>
        <p>{actor.place_of_birth}</p>
        <p>{actor.birthday}</p>
      </div>
    </>
  );
}

export default InfoActors;
