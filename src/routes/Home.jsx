import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import InfoMovie from "./InfoMovie";

function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/info-movie/:id" element={<InfoMovie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Home;
