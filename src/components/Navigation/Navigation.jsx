import { Link } from "react-router-dom";
import Avatar from "../../assets/images/temp-avatar.jpg";
import closeIcon from "../../assets/icons/nav-close-v.svg";
import { useSelector } from "react-redux";
import { setIsNavOpen } from "../../redux-store/features/misc/misc";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import navicon_Courses from "../../assets/icons/nav/courses.svg";
import navicon_Announcements from "../../assets/icons/nav/announcements.svg";
import navicon_About from "../../assets/icons/nav/about.svg";
import navicon_Complaints from "../../assets/icons/nav/complaints.svg";


const Navigation = () => {
  const dispatch = useDispatch();

  const isNavOpen = useSelector((state) => state.misc).isNavOpen;

  useEffect(() => {
    if (window.innerWidth > 640) {
      dispatch(setIsNavOpen(true));
    }
  }, []);

  const pagesList = [
    {
      name: "B.Sc. CS Sem 3",
      link: "bsccs/3",
      bolder: true
    },
    {
      name: "Courses",
      link: "/courses",
      icon: navicon_Courses,
      active: true
    },
    {
      name: "Announcements",
      link: "/announcements",
      icon: navicon_Announcements
    },
    {
      name: "About",
      link: "/about",
      icon: navicon_About
    },
    {
      name: "Complaints",
      link: "/complaints",
      icon: navicon_Complaints
    },
    {
      name: "Admin",
      link: "/admin",
    },
  ];

  const toggleNav = () => {
    dispatch(setIsNavOpen(!isNavOpen));
  };

  const toggleNavRedirect = () => {
    // Closes the navigation only when in mobile for redirects
    if (window.innerWidth < 640) {
      dispatch(setIsNavOpen(!isNavOpen));
    }
  };

  const links = pagesList.map((item) => (
    <Link
      to={item.link}
      className={`flex items-center py-3 my-2 text-[1.3em] underline-offset-2 hover:underline sm:py-4 sm:text-[1em] px-4 rounded-xl ${item.active ? "bg-[#7685E7]" : ""} ${item.bolder ? "font-bold" : ""}`}
      onClick={toggleNavRedirect}
    >
      {item.icon ? (<img src={item.icon} className="h-[1em] mr-4" alt="" />) : ""}

      <p>{item["name"]}</p>
    </Link>
  ));

  return (
    <>
      <div
        className={`rounded-tr-3xl rounded-br-3xl no-scrollbar ease fixed top-0 z-[100000] sm:sticky ${isNavOpen ? "left-0" : "left-[-100%]"} flex h-[100vh] flex-col items-center text-white transition-all duration-200 sm:left-0 ${isNavOpen ? "w-[80%] p-8 sm:w-[250px]" : "w-[80%] sm:w-0 sm:p-0"} overflow-y-auto overflow-x-hidden bg-gradient-to-b from-[#6161A8] to-[#0A1E44] `}
      >
        <div className="flex w-full justify-end">
          <img
            src={closeIcon}
            className="mb-6 w-[0.7em] sm:hidden"
            onClick={toggleNav}
          />
        </div>
        <div className="flex w-full sm:flex-col">
          <div className="flex w-[25%] flex-col items-center sm:w-[40%]">
            <img
              src={Avatar}
              className={`aspect-square w-[100%] rounded-full`}
              style={{
                boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.4)",
              }}
              alt=""
            />
          </div>
          <div className="p-2 pl-4 sm:text-center">
            <p className="mb-2 text-[1.2em] font-bold sm:mb-0">Good morning!</p>
            <Link
              onClick={toggleNavRedirect}
              to={"/u"}
              className="cursor-pointer underline-offset-2 hover:underline text-[0.9em]"
            >
              View profile
            </Link>
          </div>
        </div>
        <div className="my-4 mt-8 h-[1px] w-full bg-white sm:mt-4"></div>
        <div className="flex flex-col w-full">{links}</div>
      </div>
    </>
  );
};

export default Navigation;
