import { Navigate, Outlet } from "react-router-dom";

function Protected() {
  const isLoggedIn = sessionStorage.getItem("token");

  if (!isLoggedIn) {
    return <Navigate to={"/register"} />;
  } else {
    return <Outlet />;
  }
}

export default Protected;
