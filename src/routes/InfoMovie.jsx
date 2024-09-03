import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

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
        className=""
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/w500/${backdrop_path}')`,
          width: "auto",
          height: "37rem",
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
            height: "37rem",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
          }}
        ></div>
      </div>
    </>
  );
}

export default InfoMovie;
