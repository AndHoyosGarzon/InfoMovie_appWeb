import { useEffect, useState } from "react";
import { getTrailer } from "../js/fetch";
import { optionsHeaders } from "../js/tools";
import { useParams } from "react-router-dom";

function Video() {
  const [data, setData] = useState([])  
  const [trailer, setTrailer] = useState([]);
  const [error, setError] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
      getTrailer(url, optionsHeaders, setTrailer, setError);
    } else {
      console.log("not id movie");
    }
  }, [id]);

  

  return (
    <div className="container text-center ">
      <h1>trailer movie play</h1>
      {trailer && (
        <iframe
          id="ytplayer"
          type="text/html"
          width="720"
          height="405"
          src={`https://www.youtube.com/embed/${
            trailer && trailer.key
          }?autoplay=1&color=white`}
        />
      )}
    </div>
  );
}

export default Video;
