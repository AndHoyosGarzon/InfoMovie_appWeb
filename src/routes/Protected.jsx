import { Navigate, Outlet } from "react-router-dom";

function Protected() {
  const isLoggedIn = JSON.parse(sessionStorage.getItem("user"));
  if (
    !isLoggedIn.username ||
    !isLoggedIn.fullname ||
    !isLoggedIn.email ||
    !isLoggedIn.accessToken ||
    !isLoggedIn._id
  ) {
    return <Navigate to={"/"} />;
  } else {
    return <Outlet />;
  }
}

export default Protected;
