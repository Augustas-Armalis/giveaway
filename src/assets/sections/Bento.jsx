import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FirstBento from "../components/FirstBento.jsx";
import SecondBento from "../components/SecondBento.jsx";
import ThirdBento from "../components/ThirdBento.jsx";
import BentoTitle from "../components/BentoTitle.jsx";

const Bento = () => {
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);

  const isFirstInView = useInView(firstRef, { once: true, margin: "0px 0px -50px 0px" });
  const isSecondInView = useInView(secondRef, { once: true, margin: "0px 0px -50px 0px" });
  const isThirdInView = useInView(thirdRef, { once: true, margin: "0px 0px -50px 0px" });

  const variants = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex items-center justify-center w-full !mt-[192px] max-[548px]:!mt-[124px]">
      <div className="w-[1000px] relative flex flex-col items-center gap-[64px] !mx-8 h-fit max-[1064px]:w-full max-[548px]:!mx-4">
        <BentoTitle />
        <div className="flex gap-[10px] flex-row flex-wrap justify-center">
          <motion.div
            ref={firstRef}
            initial="hidden"
            animate={isFirstInView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 1, ease: [0.25, 0, 0.1, 1], delay: 0 }}
            className="max-[450px]:w-full"
          >
            <FirstBento />
          </motion.div>
          <motion.div
            ref={secondRef}
            initial="hidden"
            animate={isSecondInView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 1, ease: [0.25, 0, 0.1, 1], delay: 0.15 }}
            className="max-[450px]:w-full"
          >
            <SecondBento />
          </motion.div>
          <motion.div
            ref={thirdRef}
            initial="hidden"
            animate={isThirdInView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 1, ease: [0.25, 0, 0.1, 1], delay: 0.3 }}
            className="max-[450px]:w-full"
          >
            <ThirdBento />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Bento;