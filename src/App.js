import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import Analysis from "./pages/Analysis";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="analysis" element={<Analysis />} />
      </Routes>
    </>
  );
}

export default App;
