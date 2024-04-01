import Logo from "../../assets/logo/logo.svg";
import DownArrow from "../../assets/icons/downarrow.svg";
import { useState } from "react";

const Header = () => {
  const pagesList = [
    {
      name: "B.Sc. CS Sem 3",
      link: "",
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
      name: "My profile",
      link: "/u",
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

  
  let headerTopClasses = "";
  let headerFullClasses = "";
  let downArrowClasses = "";
  const [navOpen, setNavOpen] = useState(false);
  
  
  if (navOpen) {
    headerFullClasses += " bg-gradient-to-b from-[#B7DCD2] to-white h-full";
    downArrowClasses += " rotate-180";
  } else {
    headerTopClasses +=
    " bg-gradient-to-b from-[#B7DCD2] to-white";
    headerFullClasses += " h-0";
  }
  
  const links = pagesList.map((item) => (
    <a key={item["name"]}  className="text-[1.3em] py-4">{item["name"]}</a>
  ));
  const toggleNav = () => {
    setNavOpen(!navOpen);
  }
  
  return (
    <>
      <div className={`h-14 sm:h-[5.2rem] flex items-center justify-center sm:justify-start relative z-[100]` + headerTopClasses}>
        <img className="h-[50%] sm:h-[45%] sm:ml-12" src={Logo} alt="" />
        <div className="hidden sm:flex ml-10  gap-5 text-[0.71rem] font-medium">
          {links}
        </div>
        <img className={`sm:hidden absolute right-7` + downArrowClasses} src={DownArrow} onClick={(e) => toggleNav()} alt="" />
      </div>
      <div className={`absolute top-0 w-full z-[99] flex sm:hidden flex-col p-4  items-center justify-center overflow-hidden` + headerFullClasses}>
        {links}
      </div>
    </>
  );
};

export default Header;
