import { useState } from "react";
import style from "../styles/style.module.css";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function FormRegister() {
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const registerUser = async () => {
    try {
      const url =
        "https://apirest-auth-users-appinfomovies.onrender.com/api/register";
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, fullname, email, password }),
      };

      const response = await fetch(url, options);

      if (!response.ok) {
        setError("Error register user");
      } else if (response.ok) {
        navigate("/login");
      }
      const data = await response.json();
      setData(data.message);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !fullname || !email || !password) {
      toast.error("Please complete all fields");
    }

    registerUser();

    if ((username, fullname, email, password)) {
      setUsername("");
      setFullname("");
      setEmail("");
      setPassword("");
    }
  };

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
            Username
          </label>
          <input
            className={style.desing_input}
            type="text"
            id="name"
            placeholder="Jhon"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className={style.content_inputs}>
          <label className="fw-bold h6 text-secondary" htmlFor="lastName">
            Fullname
          </label>
          <input
            className={style.desing_input}
            type="text"
            id="lastName"
            placeholder="Doe"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
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
          Register
        </button>
        <div className={style.text_form}>
          <p>Please enter all the data to create your account</p>
        </div>
      </form>
      <a className="mt-3 fw-bold text-secondary" href="/">
        Go Back
      </a>
      <ToastContainer />
    </div>
  );
}

export default FormRegister;
