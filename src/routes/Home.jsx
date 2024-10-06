import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import Movies from "./Movies";
import Series from "./Series";
import Info from "./Info";
import Peoples from "./Peoples";
import Register from "./Register";
import Login from "./Login";
import InfoActors from "./InfoActors";
import Protected from "./Protected";

function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route   element={<Protected />}>
          <Route path="/" element={<Landing />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/peoples" element={<Peoples />} />
          <Route
            path="/info/:id/:language/:title/:overview/:vote/:backdrop/:poster"
            element={<Info />}
          />
          <Route path="/info_actors/:id" element={<InfoActors />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Home;
