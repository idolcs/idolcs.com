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

  
  let headerTopClasses = "h-14 flex items-center justify-center relative z-[100]";
  let headerFullClasses = "absolute top-0 w-full z-[99] flex flex-col p-4 items-center justify-center overflow-hidden";
  let downArrowClasses = "absolute right-7";
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
      <div className={headerTopClasses}>
        <img className="h-[50%]" src={Logo} alt="" />
        <img className={downArrowClasses} src={DownArrow} onClick={(e) => toggleNav()} alt="" />
      </div>
      <div className={headerFullClasses}>
        {links}
      </div>
    </>
  );
};

export default Header;
