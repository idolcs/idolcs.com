import { useEffect } from "react";
import Logo from "../../assets/logo/logo-white.svg";
import { motion } from "framer-motion";
import { useState } from "react";

const Preloader = (props) => {


  const [showPreloader2, setShowPreloader2] = useState(true);

  const variants = {
    open: { opacity: 1},
    closed: { opacity: 0}
  };

  const showPreloader = props.showPreloader;
  // const showPreloader = true;

  useEffect(() => {
    if(showPreloader == false){
      setTimeout(() => {
        setShowPreloader2(false);
      }, 500);
    }
  }, [showPreloader])

  let showBalls = true;

  if (window.innerWidth > 640) {
    showBalls = false;
  }

  return (
    <>
      <motion.div
        variants={variants}
        initial="open"
        animate={showPreloader ? "open" : "closed"}
        transition={{ duration: 0.3 }}
        className={`fixed left-0 top-0 z-[10000000000000] h-[100dvh] w-[100%] flex-col items-center justify-center overflow-hidden transition-all duration-500 ${showPreloader2 ? "flex" : "hidden"}`}
        style={{
          background: "radial-gradient(#333394 0%, #13135B 100%)",
        }}
      >
        <div>
          <img className="animate-loader-logo pb-10" src={Logo} alt="" />
        </div>

        <div className={`${showPreloader ? "" : "hidden"} ${showBalls ? "hidden" : ""} animate-loader-dots dotted-background fixed left-0 top-0 h-[100dvh] w-full`}></div>

        <div className={`${showBalls ? "" : "hidden"} animate-loader-balls absolute bottom-[-10%] left-[-30%] aspect-square h-[45%] rounded-full bg-gradient-to-tr from-[#032E81] via-[#032E81] to-[#8BB3FF] sm:bottom-[-10%] sm:left-[-8%] sm:h-[70%]`}></div>
        <div className={`${showBalls ? "" : "hidden"} animate-loader-balls absolute right-[-30%] top-[-10%] aspect-square h-[34%] rounded-full bg-gradient-to-bl from-[#032E81] via-[#032E81] to-[#8BB3FF] sm:right-[-5%] sm:top-[-8%] sm:h-[80%]`}></div>
      </motion.div>
    </>
  );
};

export default Preloader;
