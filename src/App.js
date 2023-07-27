import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import IndexP from "./pages/Index/Index";
import Project from "./pages/Project/Project";
import LuneBleue from "./pages/projects/LuneBleue/LuneBleue";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/index"
          element={<IndexP />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/project"
          element={<Project />}
        />
        <Route
          path="/project/lune-bleue"
          element={<LuneBleue />}
        />
      </Routes>
    </div>
  );
}
