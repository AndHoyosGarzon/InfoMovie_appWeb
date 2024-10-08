import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import style from "../styles/style.module.css";
import { getTrailer } from "../js/fetch";
import { optionsHeaders } from "../js/tools";
import { useEffect, useState } from "react";

function Info() {
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);
  const [trailer, setTrailer] = useState([]);

  const navigate = useNavigate();

  const { id, language, title, overview, vote, poster } = useParams();

  useEffect(() => {
    if (id) {
      const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
      getTrailer(url, optionsHeaders, setData, setError);
    } else {
      console.log("not id movie");
    }
  }, [id]);

  setTimeout(() => {
    if (data) {
      const findTriler = data.results.filter((prop) => prop.type == "Trailer");
      setTrailer(findTriler[0]);
    }
  }, 100);

  console.log(trailer);

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
              {/* <h5>
                <FaLanguage size={30} />
                {language && language}
              </h5>
              <h5>
                <AiTwotoneLike /> {vote && vote}
              </h5> */}

              <div className="container text-center ">
                <h1>{trailer ? trailer.name : "Trailer"}</h1>
                {trailer && (
                  <iframe
                    id="ytplayer"
                    type="text/html"
                    width="720"
                    height="400"
                    src={`https://www.youtube.com/embed/${
                      trailer && trailer.key
                    }?autoplay=1&color=white`}
                    allowFullScreen
                  />
                )}
              </div>
            </div>
            <div className="container d-flex justify-content-center mb-5">
              <button
                onClick={() => navigate("/movies")}
                className="btn btn-sm fw-bold btn-primary"
              >
                Go Back
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
