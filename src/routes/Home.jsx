import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Landing";

function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/movie-detail" element={<h1>Detail-movie</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Home;
