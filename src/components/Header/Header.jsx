import Logo from "../../assets/logo/logo-white.svg";
import Hamburger from "../../assets/icons/hamburger.svg";
import closeHamburger from "../../assets/icons/close-hamburger.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setIsNavOpen } from "../../redux-store/features/misc/misc";

const Header = (props) => {

  const dispatch = useDispatch();

  const isNavOpen = useSelector(state => state.misc).isNavOpen;

  const toggleNav = () => {
    dispatch(setIsNavOpen(!isNavOpen));
  };

  return (
    <>
      <div className={`p-4 bg-[#1F1F65] flex h-14 items-center justify-between sm:h-[5.2rem] sm:justify-start sm:pl-12`}>
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
          <Link to={"/"}>
            <img className="h-[30px] sm:ml-8 sm:h-[45%]" src={Logo} alt="" />
          </Link>

        <svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg" className="">
          <path d="M16.2238 0.00134719C7.22577 -0.108787 -0.120046 6.54804 0.00148663 14.7021C0.121481 22.5223 7.14808 28.8899 15.7777 28.9986C24.7773 29.1101 32.1215 22.4533 31.9985 14.2992C31.88 6.47764 24.8534 0.110087 16.2238 0.00134719ZM25.948 22.8123C25.9173 22.8423 25.8798 22.8659 25.838 22.8813C25.7962 22.8967 25.7511 22.9036 25.7061 22.9014C25.661 22.8993 25.617 22.8882 25.5772 22.869C25.5374 22.8497 25.5027 22.8227 25.4757 22.79C24.7877 21.9743 23.9451 21.2759 22.9873 20.7274C21.029 19.5884 18.5476 18.9611 16.0007 18.9611C13.4539 18.9611 10.9725 19.5884 9.01415 20.7274C8.0564 21.2756 7.21384 21.9738 6.5258 22.7893C6.49877 22.8221 6.46412 22.849 6.42431 22.8683C6.3845 22.8875 6.3405 22.8986 6.29543 22.9007C6.25036 22.9029 6.20532 22.896 6.16352 22.8806C6.12171 22.8652 6.08416 22.8416 6.05352 22.8116C3.79645 20.6036 2.51791 17.7185 2.46291 14.7091C2.33753 7.92611 8.47956 2.24864 15.9677 2.23191C23.4558 2.21518 29.5386 7.72536 29.5386 14.5C29.5412 17.5819 28.2587 20.5509 25.948 22.8123Z" fill="white" />
          <path d="M15.9994 5C14.2593 5 12.6859 5.61583 11.5679 6.735C10.4499 7.85417 9.89135 9.40167 10.0175 11.0625C10.2734 14.3333 12.9568 17 15.9994 17C19.0419 17 21.72 14.3333 21.9812 11.0633C22.1118 9.41833 21.5577 7.885 20.4211 6.745C19.2987 5.62 17.728 5 15.9994 5Z" fill="white" />
        </svg>
      </div>
    </>
  );
};

export default Header;
