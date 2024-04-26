import Logo from "../../assets/logo/logo-white.svg";
import Hamburger from "../../assets/icons/hamburger.svg";
import closeHamburger from "../../assets/icons/close-hamburger.svg";

const Header = (props) => {
  const isNavOpen = props.isNavOpen;
  const setIsNavOpen = props.setIsNavOpen;

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <div
        className={`relative z-[100] flex h-14 items-center sm:h-[5.2rem] sm:justify-start px-4 sm:px-10`}
      >
        <div className="">
        <img
          src={Hamburger}
          className={`w-6 cursor-pointer ${isNavOpen ? "hidden" : ""}`}
          onClick={toggleNav}
        />
        <img
          src={closeHamburger}
          className={`w-6 cursor-pointer ${!isNavOpen ? "hidden" : ""}`}
          onClick={toggleNav}
        />
        </div>
        <img className="h-[50%] ml-4 sm:ml-8 sm:h-[45%]" src={Logo} alt="" />
      </div>
    </>
  );
};

export default Header;
