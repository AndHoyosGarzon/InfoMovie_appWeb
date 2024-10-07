import { useEffect, useState } from "react";
import style from "../styles/style.module.css";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import {
  Bounce,
  Flip,
  Slide,
  ToastContainer,
  Zoom,
  toast,
} from "react-toastify";
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
        toast.error("Error in login user", {
          position: "top-center",
          theme: "dark",
          transition: Flip,
          autoClose: 2000,
        });
        throw new Error(response.ok);
      }

      toast.info("Login successfully", {
        position: "top-center",
        theme: "dark",
        transition: Flip,
        autoClose: 2000,
      });

      const data = await response.json();

      sessionStorage.setItem("user", JSON.stringify(data));

      return setData(data);
    } catch (error) {
      //    console.log("el error es", error.message);
      setError(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.warning("Please complete all fields", {
        position: "top-center",
        theme: "dark",
        autoClose: 2000,
        transition: Flip,
      });
    }
    if (email && password) {
      loginUser();
      setEmail("");
      setPassword("");
    }
  };

  setTimeout(() => {
    if (data.length < 1) {
      return;
    }
    navigate("/");
  }, 3000);

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
