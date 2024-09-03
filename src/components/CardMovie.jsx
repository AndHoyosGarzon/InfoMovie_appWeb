import { MdLocalMovies } from "react-icons/md";

function CardMovie({ img, title, date, votes, params }) {
  return (
    <div className="shadow card m-3 col-sm-4 col-md-3 col-lg-3">
      <span className="position-absolute top-0 start-100 border secondary-subtle translate-middle badge rounded-pill bg-danger">
        {votes}%
      </span>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <p></p>
        <h6 className="card-title fw-bold">{title}</h6>
        <p className="card-text fw-bold">{date}</p>
        <a
          onClick={params}
          href="#"
          className="btn btn-danger btn-sm border border-secondary-subtle fw-bold rounded-pill"
        >
          Ver mas <MdLocalMovies />
        </a>
      </div>
    </div>
  );
}

export default CardMovie;
