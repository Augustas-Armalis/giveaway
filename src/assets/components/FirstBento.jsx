import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const FirstBento = () => {

  const [isActive, setIsActive] = useState(false);
  const bentoRef = useRef(null);

  const largeImageVariants = {
    rest: {
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0, 0.1, 1],
      },
    },
    active: {
      rotate: 6,
      transition: {
        duration: 0.5,
        ease: [0.25, 0, 0.1, 1],
      },
    },
  };

  const smallImageVariants = {
    rest: {
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0, 0.1, 1],
      },
    },
    active: {
      rotate: -6,
      transition: {
        duration: 0.5,
        ease: [0.25, 0, 0.1, 1],
      },
    },
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (bentoRef.current && !bentoRef.current.contains(event.target)) {
        setIsActive(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (

    <motion.div
      ref={bentoRef}
      className="w-[327px] h-[327px] bg-black border border-[var(--gray3)] max-[450px]:w-full !p-[20px] rounded-[16px] relative overflow-hidden"
      whileHover="active"
      onClick={() => setIsActive(true)}
      animate={isActive ? "active" : "rest"}
    >

      <div className="flex flex-col gap-1 relative z-90">
        <p className="smif text-[24px]">Quality</p>
        <p className="sf text-[18px] text-[var(--gray1)] leading-[130%] max-w-[220px]">
          Get the best website out there built with custom code
        </p>
      </div>

      <motion.img
        src="images/websites/dark/Plazma.webp"
        alt="Website"
        className="absolute z-20 h-[220px] w-auto border border-[var(--gray4)] rounded-[16px] object-cover object-left right-[-130px] bottom-[-25px] shadow-[0_0_20px_0_rgba(0,0,0,0.5)]"
        variants={largeImageVariants}
      />

      <motion.img
        src="images/websites/light/Mujtama.webp"
        alt="Website"
        className="absolute z-19 h-[150px] w-[241px] border border-[var(--gray4)] rounded-[16px] object-cover object-left left-0 bottom-[-5px]"
        variants={smallImageVariants}
      />

      <div className="absolute bottom-0 w-[250px] h-[120px] bg-[#839ABC] rounded-[50%] blur-[100px] !ml-[20px] z-0 rotate-150" />

    </motion.div>

  );

};

export default FirstBento;