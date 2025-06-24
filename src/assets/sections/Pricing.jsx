import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import LeftPricingBox from "../components/LeftPricingBox.jsx";
import MiddlePricingBox from "../components/MiddlePricingBox.jsx";
import RightPricingBox from "../components/RightPricingBox.jsx";
import FlyInTitle from "../components/FlyInTitle.jsx";
import SpotsLeft from "../components/SpotsLeft.jsx";

const Pricing = ({spots}) => {
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
    <div className="flex items-center justify-center w-full !mt-[192px] max-[548px]:!mt-[124px]" id="pricing">
      <div className="w-[1000px] relative flex flex-col items-center gap-[24px] !mx-8 h-fit max-[1064px]:w-full max-[548px]:!mx-4">
        <div className="flex flex-col gap-[42px]">
          <FlyInTitle title="Our plans are simple" />
          <SpotsLeft spots={spots}/>
        </div>

        <div className="flex gap-[10px] flex-row flex-wrap justify-center max-[732px]:gap-[16px]">
          <motion.div
            ref={firstRef}
            initial="hidden"
            animate={isFirstInView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 1, ease: [0.25, 0, 0.1, 1], delay: 0 }}
            className="max-[450px]:w-full"
          >
            <LeftPricingBox />
          </motion.div>
          <motion.div
            ref={secondRef}
            initial="hidden"
            animate={isSecondInView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 1, ease: [0.25, 0, 0.1, 1], delay: 0.15 }}
            className="max-[450px]:w-full"
          >
            <MiddlePricingBox />
          </motion.div>
          <motion.div
            ref={thirdRef}
            initial="hidden"
            animate={isThirdInView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 1, ease: [0.25, 0, 0.1, 1], delay: 0.3 }}
            className="max-[450px]:w-full"
          >
            <RightPricingBox />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;