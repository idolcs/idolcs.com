import Navigation from "./Navigation";
import logo from "../assets/logo-IDOLCS.png";
import navToggleImg from "../assets/nav-arrow.svg";
import { useState } from "react";

export default function Header() {
    const media = window.matchMedia("(min-width: 768px)");
    const [isVisible, setVisibility] = useState(media.matches);
    const [rotation, setRotation] = useState(0);
    const toggleNav = () => {
        setVisibility(prevVisibility => !prevVisibility);
        setRotation(prevRotation => prevRotation + 180);
    }
    return (
        <header className="relative flex flex-col md:flex-row md:justify-between bg-gradient-to-b from-[#B7DADC] to-white">
            <div className="flex items-center justify-between">
                <svg viewBox="0 0 57 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="p-3 w-[6em] h-[5em] m-auto md:m-0">
                    <path d="M0 34V0H4.93012V34H0Z" fill="black" />
                    <path d="M14.7563 34H5.78773V0H14.7563L16.4347 1.70533V32.2414L14.7563 34ZM11.557 31.5486V2.5047H10.6654V31.5486H11.557Z" fill="black" />
                    <path d="M27.9077 1.70533V32.2414L26.2294 34H18.9391L17.2607 32.2414V1.70533L18.9391 0H26.2294L27.9077 1.70533ZM23.03 31.5486V2.5047H22.1909V31.5486H23.03Z" fill="black" />
                    <path d="M34.5031 31.5486V34H30.4121L28.7338 32.2414V0H33.6639V31.5486H34.5031Z" fill="black" />
                    <path d="M40.6493 31.5486V17.0533L42.2752 15.348H45.527V32.2414L43.8486 34H36.5584L34.88 32.2414V1.70533L36.5584 0H43.8486L45.527 1.70533V14.5486H42.2752L40.6493 12.8433V2.5047H39.8101V31.5486H40.6493Z" fill="black" />
                    <path d="M51.2832 10.3918L57 16.4138V32.1881L55.3217 34H48.0314L46.353 32.1881V16.4138H49.0279L51.2832 18.7586V31.5486H52.1223V18.3856L46.353 12.3636V1.70533L48.0314 0H55.3217L57 1.70533V12.0439L54.0629 12.0972L52.1223 10.0188V2.5047H51.2832V10.3918Z" fill="black" />
                </svg>
                <button className="absolute top-4 right-4 border p-3 rounded items-end md:hidden" onClick={toggleNav} style={{ transform: `rotate(${rotation}deg)` }}>
                    <img src={navToggleImg} />
                </button>
            </div>
            <Navigation visibility={isVisible}/>
        </header>
    );
}