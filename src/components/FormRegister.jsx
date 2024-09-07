import style from "../styles/style.module.css";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function FormRegister() {
  return (
    <div className={style.content_form}>
      <form className={style.desing_form}>
        <div className={style.title_form}>
          <div className="my-3">
            <span className="me-3">
              <FaGithub size={26} />
            </span>
            <span>
              <FcGoogle size={28} />
            </span>
          </div>
          <h6 className="fw-bold">Create account with github or google</h6>
          <p className="text-secondary">select how you want to enter</p>
        </div>
        <div className={style.content_inputs}>
          <label className="fw-bold h6 text-secondary" htmlFor="name">
            First Name
          </label>
          <input
            className={style.desing_input}
            type="text"
            id="name"
            placeholder="Jhon"
            required
          />
        </div>
        <div className={style.content_inputs}>
          <label className="fw-bold h6 text-secondary" htmlFor="lastName">
            Last Name
          </label>
          <input
            className={style.desing_input}
            type="text"
            id="lastName"
            placeholder="Doe"
            required
          />
        </div>
        <div className={style.content_inputs}>
          <label className="fw-bold h6 text-secondary" htmlFor="email">
            Email
          </label>
          <input
            className={style.desing_input}
            type="email"
            id="email"
            placeholder="user@example.com"
            required
          />
        </div>
        <div className={style.content_inputs}>
          <label className="fw-bold h6 text-secondary" htmlFor="password">
            Password
          </label>
          <input
            className={style.desing_input}
            type="password"
            id="password"
            placeholder="User78952."
            required
          />
        </div>
        <div className={style.content_inputs}>
          <label
            className="fw-bold h6 text-secondary"
            htmlFor="repeat_password"
          >
            Repeat password
          </label>
          <input
            className={style.desing_input}
            type="password"
            id="repeat_password"
            placeholder="********"
            required
          />
        </div>
        <button className={style.btn}>Register</button>
        <div className={style.text_form}>
          <p>Please enter all the data to create your account</p>
        </div>
      </form>
      <a className="mt-3 fw-bold text-secondary" href="/">
        Go Back
      </a>
    </div>
  );
}

export default FormRegister;
