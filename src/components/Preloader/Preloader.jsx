import Logo from "../../assets/logo/logo-white.svg";

const Preloader = (props) => {
  const showPreloader = props.showPreloader;
  // const showPreloader = true;

  return (
    <>
      <div
        className={`fixed left-0 top-0 z-[10000000000000] ${showPreloader ? "flex" : "top-[-1000%] flex"} h-[100dvh] w-[100%] flex-col items-center justify-center overflow-hidden transition-all duration-500`}
        style={{
          background: "radial-gradient(#333394 0%, #13135B 100%)",
        }}
      >
        <div>
          <img className="animate-loader-logo pb-10" src={Logo} alt="" />
        </div>

        <div className="animate-loader-dots dotted-background fixed left-0 top-0 h-[100dvh] w-full"></div>

        {/* <div
          className={`${showBalls ? "" : "hidden"} animate-loader-balls absolute bottom-[-10%] left-[-30%] aspect-square h-[45%] rounded-full bg-gradient-to-tr from-[#032E81] via-[#032E81] to-[#8BB3FF] sm:bottom-[-10%] sm:left-[-8%] sm:h-[70%]`}
        ></div>
        <div
          className={`${showBalls ? "" : "hidden"} animate-loader-balls absolute right-[-30%] top-[-10%] aspect-square h-[34%] rounded-full bg-gradient-to-bl from-[#032E81] via-[#032E81] to-[#8BB3FF] sm:right-[-5%] sm:top-[-8%] sm:h-[80%]`}
        ></div> */}
      </div>
    </>
  );
};

export default Preloader;
