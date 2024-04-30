import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Courses from "./components/Courses/Courses";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import { useEffect, useState } from "react";
import Preloader from "./components/Preloader/Preloader";
import { Provider } from "react-redux";
import { store } from "./redux-store/store";
import Subject from "./components/Subject/Subject";
import Admin from "./components/AdminPanel/Admin";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);

  const isDesktop = Boolean(window.innerWidth > 640);

  useEffect(() => {
    if(isDesktop){
      setIsNavOpen(true);
    }
    setTimeout(()=> {
      setShowPreloader(false);
    }, 2500);
  }, [])

  return (
    <>
      <Provider store={store}>
      <Preloader showPreloader={showPreloader} />
      <div className="relative flex">
        <div>
          <Navigation isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        </div>
        <div className="max-w-full">
          <Header isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<p>This is the home</p>} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/subject" element={<Subject />}  />
            <Route path="/admin" element={<Admin />} />
          </Routes>
          <Footer />
        </div>
      </div>
      </Provider>
    </>
  );
}

export default App;
