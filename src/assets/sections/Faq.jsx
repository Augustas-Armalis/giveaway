import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FlyInTitle from "../components/FlyInTitle.jsx";
import FaqQuestion from "../components/FaqQuestion.jsx";
import TestimonialButton from "../buttons/TestimonialButton.jsx";

const Faq = () => {
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
  const fourthRef = useRef(null);
  const fifthRef = useRef(null);
  const buttonRef = useRef(null);

  const isFirstInView = useInView(firstRef, { once: true, margin: "0px 0px -50px 0px" });
  const isSecondInView = useInView(secondRef, { once: true, margin: "0px 0px -50px 0px" });
  const isThirdInView = useInView(thirdRef, { once: true, margin: "0px 0px -50px 0px" });
  const isFourthInView = useInView(fourthRef, { once: true, margin: "0px 0px -50px 0px" });
  const isFifthInView = useInView(fifthRef, { once: true, margin: "0px 0px -50px 0px" });
  const isButtonInView = useInView(buttonRef, { once: true, amount: 0.5 });

  const faqVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0, 0.1, 1],
        delay: index * 0.17,
      },
    }),
  };

  return (
    <div className="flex items-center justify-center w-full !mt-[192px]">
      <div className="w-full relative flex flex-col items-center gap-[64px] !mx-8 h-fit max-[548px]:!mx-4 max-[1065px]:gap-[64px]">
        <FlyInTitle title="Answers to your questions" />

        <div className="flex w-full flex-col items-center gap-[10px]">
          <motion.div
            ref={firstRef}
            initial="hidden"
            animate={isFirstInView ? "visible" : "hidden"}
            variants={faqVariants}
            transition={{ duration: 1, ease: [0.25, 0, 0.1, 1], delay: 0 }}
            className="w-full flex justify-center"
          >
            <FaqQuestion
              question="How much time it takes to develop a website?"
              answer="See & adjust the first design within 4 days. Usually it takes 1-2 weeks to completely develop the entire website. The speed also depends on how fast you give feedback and how great our communication is."
            />
          </motion.div>
          <motion.div
            ref={secondRef}
            initial="hidden"
            animate={isSecondInView ? "visible" : "hidden"}
            variants={faqVariants}
            transition={{ duration: 1, ease: [0.25, 0, 0.1, 1], delay: 0.02 }}
            className="w-full flex justify-center"
          >
            <FaqQuestion
              question="Any info required from me to get started?"
              answer="Absolutely! To start, you’ll have to fill out an onboarding form requiring everything about your business (from colors to what it's about). We will use the information to create a website that not only looks nice, but also converts and speaks as your brand."
            />
          </motion.div>
          <motion.div
            ref={thirdRef}
            initial="hidden"
            animate={isThirdInView ? "visible" : "hidden"}
            variants={faqVariants}
            transition={{ duration: 1, ease: [0.25, 0, 0.1, 1], delay: 0.04 }}
            className="w-full flex justify-center"
          >
            <FaqQuestion
              question="Why do I need monthly upgrades?"
              answer="Your website should grow alongside your brand. Simply let us know what you need - new testimonials, sections, pages, or even entirely new projects - and we’ll take care of it. We’ll keep your site updated, optimized, and future-ready, acting as your long-term website partner as your business grows."
            />
          </motion.div>
          <motion.div
            ref={fourthRef}
            initial="hidden"
            animate={isFourthInView ? "visible" : "hidden"}
            variants={faqVariants}
            transition={{ duration: 1, ease: [0.25, 0, 0.1, 1], delay: 0.06 }}
            className="w-full flex justify-center"
          >
            <FaqQuestion
              question="How do we communicate?"
              answer="We can chat through Telegram, Discord or Whatsapp, whatever works best for you."
            />
          </motion.div>
          <motion.div
            ref={fifthRef}
            initial="hidden"
            animate={isFifthInView ? "visible" : "hidden"}
            variants={faqVariants}
            transition={{ duration: 1, ease: [0.25, 0, 0.1, 1], delay: 0.08 }}
            className="w-full flex justify-center"
          >
            <FaqQuestion
              question="Do we offer refunds?"
              answer="Due to high-quality and time-consumption of the work, we do not offer refunds."
            />
          </motion.div>

          <div ref={buttonRef} className="flex flex-col items-center">
            <motion.a
              href="https://x.com/AugustasDesign"
              target="_blank"
              custom={0}
              variants={containerVariants}
              initial="hidden"
              animate={isButtonInView ? "visible" : "hidden"}
              className="!mt-[42px]"
            >
              <TestimonialButton
                title="Message us if you have more"
                src="images/svgs/Chat.svg"
              />
            </motion.a>
            <motion.p
              custom={1}
              variants={containerVariants}
              initial="hidden"
              animate={isButtonInView ? "visible" : "hidden"}
              className="sf text-[15px] spots-below"
            >
              hello@augustas.co
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;