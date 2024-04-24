import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Courses from "./components/Courses/Courses";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import { useState } from "react";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <div className="relative flex">
        <div>
          <Navigation isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        </div>
        <div>
          <Header isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
          <Routes>
            <Route path="/" element={<Home />} />{" "}
            <Route path="/home" element={<p>This is the home</p>} />
            <Route path="/courses" element={<Courses />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
