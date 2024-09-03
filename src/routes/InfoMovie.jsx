import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import style from '../styles/style.module.css'

function InfoMovie() {
  const {
    id,
    original_language,
    original_title,
    overview,
    backdrop_path,
    poster_path,
    vote_count,
  } = useParams();

  console.log(poster_path);

  return (
    <>
      <NavBar />
      <div
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/w500/${backdrop_path}')`,
          width: "auto",
          height: "50rem",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "7.9%",
            left: "0",
            width: "100%",
            height: "50rem",
            backgroundColor: "rgba(0, 0, 0, 0.97)",
          }}
        >
          <div className={style.container_info}>
            <div className={style.content_image}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={original_title}
              />
            </div>
            <div className={style.content_data}>
              <h2 className="fw-bolder mb-4">{original_title}</h2>
              <p className="text-secondary">{overview}</p>
            </div>
            <div>
              <h2 className="fw-bolder mb-4">Idioma: {original_language}</h2>
              <p className="text-secondary ">Votos: {vote_count}</p>
            </div>
          </div>


        </div>
      </div>
    </>
  );
}

export default InfoMovie;
