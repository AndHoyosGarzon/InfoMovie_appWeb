import { MdLocalMovies } from "react-icons/md";

function Card({ img, title, date, votes, params }) {
  return (
    <div className="shadow card m-3 col-sm-4 col-md-3 col-lg-2">
      <span className="position-absolute top-0 start-100 border secondary-subtle translate-middle badge rounded-pill bg-dark">
        {votes}%
      </span>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <p></p>
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
