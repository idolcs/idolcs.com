import { Link } from "react-router-dom";
import Avatar from "../../assets/images/temp-avatar.jpg";
import closeHamburger from "../../assets/icons/close-hamburger.svg";

const Navigation = (props) => {
  const isNavOpen = props.isNavOpen;
  const setIsNavOpen = props.setIsNavOpen;

  const pagesList = [
    {
      name: "B.Sc. CS Sem 3",
      link: "bsccs/3",
    },
    {
      name: "Courses",
      link: "/courses",
    },

    {
      name: "Announcements",
      link: "/announcements",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Complaints",
      link: "/complaints",
    },
  ];

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleNavRedirect = () => {
    // Closes the navigation only when in mobile for redirects
    if (window.innerWidth < 640) {
      setIsNavOpen(!isNavOpen);
    }
  };

  const links = pagesList.map((item) => (
    <Link
      to={item.link}
      className="py-6 text-[1.3em] underline-offset-2 hover:underline sm:py-4 sm:text-[1em]"
      onClick={toggleNavRedirect}
    >
      {item["name"]}
    </Link>
  ));

  return (
    <>
      <div
        className={`no-scrollbar ease fixed top-0 z-[100000] sm:sticky ${isNavOpen ? "left-0" : "left-[-100%]"} flex h-[100vh] flex-col items-center text-white transition-all  duration-200 sm:left-0  ${isNavOpen ? "w-[80%] p-8 sm:w-[250px]" : "w-[80%] sm:w-0 sm:p-0"}  overflow-y-auto overflow-x-hidden bg-gradient-to-b from-[#6161A8] to-[#0A1E44] `}
      >
        <div className="flex w-full justify-end">
          <img
            src={closeHamburger}
            className="mb-6 w-[3em] invert sm:hidden"
            onClick={toggleNav}
          />
        </div>
        <div className="flex w-full items-center justify-center sm:flex-col">
          <div className="flex flex-col items-center w-[25%] sm:w-[40%]">
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
            <p className="mb-2 text-[1.2em] font-bold sm:mb-0">Sumeet Singh</p>
            <Link
              onClick={toggleNavRedirect}
              to={"/u"}
              className="mt-[4px] cursor-pointer underline-offset-2 hover:underline sm:text-[0.8em]"
            >
              View profile
            </Link>
          </div>
        </div>
        <div className="my-4 mt-8 sm:mt-4 h-[1px] w-full bg-white"></div>
        <div className="flex flex-col items-center text-center ">{links}</div>
      </div>
    </>
  );
};

export default Navigation;
