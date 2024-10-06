import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getActors } from "../js/fetch";
import { optionsHeaders } from "../js/tools";
import style from "../styles/style.module.css";
import NavBar from "../components/NavBar";
import Errors from "../components/Errors";

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

  
  return (
    <>
      <NavBar />
      <div className={style.content_actors}>
        
        <img
          className={style.image_actors}
          src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
          alt={actor.name}
        />
        <h1>{actor.name}</h1>
        <p>{actor.biography}</p>
        <p>{actor.place_of_birth}</p>
        <p>{actor.birthday}</p>
      </div>
    </>
  );
}

export default InfoActors;
