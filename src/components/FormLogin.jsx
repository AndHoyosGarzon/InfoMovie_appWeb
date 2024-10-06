import { useEffect, useState } from "react";
import style from "../styles/style.module.css";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const loginUser = async () => {
    try {
      const url =
        "https://apirest-auth-users-appinfomovies.onrender.com/api/login";
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      };
      const response = await fetch(url, options);

      if (!response.ok) {
        setError(response.statusText);
        toast.error(error);
      }

      const data = await response.json();
      return setData(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please complete all fields");
    }

    if (email && password) {
      loginUser();
      toast.success("Welcome");
      setEmail("");
      setPassword("");
    }

    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  sessionStorage.setItem("token", JSON.stringify(data.accessToken));

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
          <h6 className="fw-bold">Login with GitHub or Google</h6>
          <p className="text-secondary">select how you want to enter</p>
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          className={style.btn}
        >
          Login
        </button>
        <div className={style.text_form}>
          <p>Please enter your email and password to access your account</p>
        </div>
      </form>
      <a className="mt-3 fw-bold text-secondary" href="/">
        Go Back
      </a>
      <ToastContainer />
    </div>
  );
}

export default FormLogin;
