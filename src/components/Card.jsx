import { MdLocalMovies } from "react-icons/md";
import { RiStarSLine } from "react-icons/ri";
import style from "../styles/style.module.css";

function Card({ img, title, date, votes, params }) {
  return (
    <div className={`rounded ${style.content_card}`}>
      <span className={style.badge}>
        {votes}
        <RiStarSLine size={22} />
      </span>
      <img src={img} className="card-img-top rounded-top" alt="..." />
      <div className="card-body text-center py-2">
        <h6 className="card-title fw-bold">{title}</h6>
        <p className="card-text text-secondary">{date}</p>
        <a
          onClick={params}
          href="#"
          className="btn btn-dark btn-sm border border-secondary-subtle fw-bold rounded-pill"
        >
          Ver mas <MdLocalMovies />
        </a>
      </div>
    </div>
  );
}

export default Card;

//position-absolute top-0 start-100 border secondary-subtle translate-middle badge rounded-pill bg-dark
