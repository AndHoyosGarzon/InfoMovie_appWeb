import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import InfoMovie from "./InfoMovie";

function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/info-movie/:id/:original_language/:original_title/:overview/:vote_count/:backdrop_path/:poster_path"
          element={<InfoMovie />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Home;
