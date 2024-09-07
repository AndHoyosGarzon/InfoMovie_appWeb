import style from "../styles/style.module.css";

function CardSections({ img, title, date }) {
  return (
    <div className={style.content_cardSection}>
      <img className={style.img_cardSection} src={img} alt="" />
      <div>
        <p className="text-center ">{title}</p>
        <p>{date}</p>
      </div>
    </div>
  );
}

export default CardSections;
