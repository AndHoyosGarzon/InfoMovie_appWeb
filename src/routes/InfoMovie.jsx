import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import style from "../styles/style.module.css";
import { AiTwotoneLike } from "react-icons/ai";
import { FaLanguage } from "react-icons/fa";

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
      <div className={style.container_info}>
        <div className={style.content_image}>
          <img
            className={style.image}
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={original_title}
          />
        </div>
        <div className={style.content_text}>
          <div>
            <h1 className="text-center fw-bold">{original_title}</h1>
            <p className="mt-5">{overview}</p>
          </div>
          <div className={style.content_data}>
            <h5>
              <FaLanguage size={30} /> {original_language}
            </h5>
            <h5>
              <AiTwotoneLike /> {vote_count}
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoMovie;
