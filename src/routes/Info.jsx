import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import style from "../styles/style.module.css";
import { AiTwotoneLike } from "react-icons/ai";
import { FaLanguage } from "react-icons/fa";

function Info() {
  const navigate = useNavigate();

  const { id, language, title, overview, vote, poster } = useParams();

  return (
    <>
      <NavBar />
      {id ? (
        <div className={style.container_info}>
          <div className={style.content_image}>
            <img
              className={style.image}
              src={poster && `https://image.tmdb.org/t/p/w500/${poster}`}
              alt={title && title}
            />
          </div>
          <div className={style.content_text}>
            <div>
              <h1 className="text-center fw-bold">{title && title}</h1>
              <p className="mt-5">{overview && overview}</p>
            </div>
            <div className={style.content_data}>
              <h5>
                <FaLanguage size={30} />
                {language && language}
              </h5>
              <h5>
                <AiTwotoneLike /> {vote && vote}
              </h5>
            </div>
            <div className="container d-flex justify-content-center mb-5">
              <button className="btn btn-sm fw-bold btn-primary">
                Go Home
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="container text-center fw-bold">
          <h1>Loading Movie...</h1>
        </div>
      )}
    </>
  );
}

export default Info;
