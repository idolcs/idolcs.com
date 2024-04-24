import Logo from "../../assets/logo/logo.svg";
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
        className={`relative z-[100] flex h-14 items-center justify-center sm:h-[5.2rem] sm:justify-start sm:pl-12`}
      >
        <div className="absolute left-6">
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
        <img className="h-[50%] sm:ml-8 sm:h-[45%]" src={Logo} alt="" />
      </div>
    </>
  );
};

export default Header;
