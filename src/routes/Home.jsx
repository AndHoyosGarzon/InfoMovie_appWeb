import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import Movies from "./Movies";
import Series from "./Series";
import Info from "./Info";
import Peoples from "./Peoples";

function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/peoples" element={<Peoples />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Home;
