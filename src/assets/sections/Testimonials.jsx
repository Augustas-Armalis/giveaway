import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import FlyInTitle from "../components/FlyInTitle.jsx";
import SproutTestimonial from "../components/SproutTestimonial.jsx";
import FrostchangerTestimonial from "../components/FrostchangerTestimonial.jsx";
import CopywizTestimonial from "../components/CopywizTestimonial.jsx";
import MotiejusTestimonial from "../components/MotiejusTestimonial.jsx";
import TestimonialButton from "../buttons/TestimonialButton.jsx";

const Testimonials = () => {
  const [displayedCount, setDisplayedCount] = useState(0);
  const buttonRef = useRef(null);
  const isButtonInView = useInView(buttonRef, { once: true, margin: "0px 0px -50px 0px" });

  const showMoreButtonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0, 0.1, 1],
        delay: 0,
      },
    },
  };

  const extraTestimonials = [
    <MotiejusTestimonial
      brand="Motiejus"
      desc="Created a hero page design for his personal brand. Helping with web designs till this day."
      case1="Web design"
      case2="Services"
    />,
  ];

  const handleShowMore = () => {
    setDisplayedCount((prev) => Math.min(prev + 3, extraTestimonials.length));
  };

  return (
    <div className="flex items-center justify-center w-full !mt-[192px]">
      <div className="w-[1000px] relative flex flex-col items-center gap-[92px] !mx-8 h-fit max-[1064px]:w-full max-[548px]:!mx-4 max-[1065px]:gap-[64px]">
        <FlyInTitle title="See our recent work" />

        <SproutTestimonial
          brand="Sprout"
          desc="Built multiple sites which generate more than 6-figs a year. Helping till this day with new projects and business growth"
          case1="Enterprise"
          case2="Venture Studio"
        />

        <FrostchangerTestimonial
          brand="FrostChanger"
          desc="Designed and coded 2 web apps. Working together for some time now and planning to do more big projects."
          case1="Enterprise"
          case2="SaaS"
        />

        <CopywizTestimonial
          brand="CopyWiz"
          desc="Helped with branding. Created a fresh website design which stood out and attracted potential clients."
          case1="Web Design"
          case2="Agency"
        />

        <AnimatePresence>
          {extraTestimonials.slice(0, displayedCount)}
        </AnimatePresence>

        {displayedCount < extraTestimonials.length && (
        <div className="!mt-[16px] max-[732px]:!mt-0">
          <motion.div
            ref={buttonRef}
            variants={showMoreButtonVariants}
            initial="hidden"
            animate={isButtonInView ? "visible" : "hidden"}
          >
            <TestimonialButton
              title="Show more case studies"
              src="images/svgs/Plus.svg"
              isActive={true}
              onClick={handleShowMore}
            />
          </motion.div>
        </div>
      )}
      </div>

      
    </div>
  );
};

export default Testimonials;