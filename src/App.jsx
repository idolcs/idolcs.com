import Header from "./components/Header/Header";
import { Route, Routes, useLocation } from "react-router-dom";
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
import LoginPage from "./components/Home/Login/LoginPage";
import SignUp from "./components/Home/Login/SignUp";
import VerificationPage from "./components/Home/Login/Verification";
import ChangePassword from "./components/Home/Login/ChangePassword";
import ResetPassword from "./components/Home/Login/ResetPassword";
import ForgotPassword from "./components/Home/Login/ForgotPassword";
import SelectSubject from "./components/SelectSubject/SelectSubject";

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

  const location = useLocation();

  return (
    <>
      <Provider store={store}>
      <Preloader showPreloader={showPreloader} />
      <div className="relative flex">
        <div>
          <Navigation isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        </div>
        <div className="max-w-full">
          {
            location.pathname !== '/loginPage' && 
            location.pathname !== '/signup' && 
            location.pathname !== '/verification'  &&
            location.pathname !== '/changePassword' && 
            location.pathname !== '/resetPassword' &&
            location.pathname !== '/forgotPassword' &&
            <Header isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
          }
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<p>This is the home</p>} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/selectsubject" element={<SelectSubject />} />
            <Route path="/subject" element={<Subject />}  />
            <Route path="/admin" element={<Admin />} />
            <Route path="/loginPage" element={<LoginPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/verification" element={<VerificationPage />} />
            <Route path="/changePassword" element={<ChangePassword />} />
            <Route path="/resetPassword" element={<ResetPassword />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
          </Routes>
            {
              location.pathname !== '/loginPage' && 
              location.pathname !== '/signup' && 
              location.pathname !== '/verification' && 
              location.pathname !== '/changePassword' &&
              location.pathname !== '/resetPassword' &&
              location.pathname !== '/forgotPassword' && 
              <Footer />
            }
        </div>
      </div>
      </Provider>
    </>
  );
}

export default App;
