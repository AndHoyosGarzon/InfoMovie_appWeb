import style from "../styles/style.module.css";

function CardSections({ img, title, date }) {
  return (
    <div className={style.content_cardSection}>
      <img className={style.img_cardSection} src={img} alt="" />
      <p className="ms-2">{title}</p>
      <p className="ms-2 text-secondary fw-bold mb-3">{date}</p>
    </div>
  );
}

export default CardSections;
