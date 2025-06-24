import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import UnavailableLink from "../buttons/UnavailableLink.jsx";
import EmailPopup from "../components/EmailPopup.jsx";
import { Link } from 'react-router-dom';

const Footer = () => {
  const linksRef = useRef(null);
  const socialLinksRef = useRef(null);
  const logoRef = useRef(null);
  const bottomRef = useRef(null);

  const isLinksInView = useInView(linksRef, { once: true, margin: "0px 0px -50px 0px" });
  const isSocialLinksInView = useInView(socialLinksRef, { once: true, margin: "0px 0px -50px 0px" });
  const isLogoInView = useInView(logoRef, { once: true, margin: "0px 0px -50px 0px" });
  const isBottomInView = useInView(bottomRef, { once: true, margin: "0px 0px -50px 0px" });

  const linkVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0, 0.1, 1],
        delay: index * 0.1,
      },
    }),
  };

  const socialLinkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.1,
      },
    }),
  };

  const logoVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const bottomVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.2,
      },
    }),
  };

  return (
    <div className="flex items-center justify-center w-full !mt-[192px] max-[548px]:!mt-[124px]">
      <div className="w-[1000px] relative flex flex-col items-center !mx-8 h-fit max-[1064px]:w-full max-[548px]:!mx-4 overflow-hidden">
        <motion.img
          ref={logoRef}
          src="images/svgs/HugeLogo.svg"
          alt="logo"
          initial="hidden"
          animate={isLogoInView ? "visible" : "hidden"}
          variants={logoVariants}
        />
        <div ref={linksRef} className="flex flex-wrap gap-[60px] flex-row z-1 !mb-[36px] !px-[20px] max-[745px]:gap-[32px] max-[394px]:gap-[16px] items-center justify-center">
          <motion.div custom={0} initial="hidden" animate={isLinksInView ? "visible" : "hidden"} variants={linkVariants}>
            <UnavailableLink title="Career" />
          </motion.div>
          <motion.div custom={1} initial="hidden" animate={isLinksInView ? "visible" : "hidden"} variants={linkVariants}>
            <a href="https://roast.augustas.co" target="_blank" className="sf text-[18px] circle-none text-white/80 hover:text-white transition-colors duration-300 ease-out">
              Hero roast
            </a>
          </motion.div>
          <motion.div custom={2} initial="hidden" animate={isLinksInView ? "visible" : "hidden"} variants={linkVariants}>
            <a href="https://hero.augustas.co" target="_blank" className="sf text-[18px] circle-none text-white/80 hover:text-white transition-colors duration-300 ease-out">
              Figma templates
            </a>
          </motion.div>
          <motion.div custom={3} initial="hidden" animate={isLinksInView ? "visible" : "hidden"} variants={linkVariants}>
            <UnavailableLink title="Newsletter" />
          </motion.div>
          <motion.div custom={4} initial="hidden" animate={isLinksInView ? "visible" : "hidden"} variants={linkVariants}>
            <UnavailableLink title="Portfolio" />
          </motion.div>
        </div>
        <div ref={socialLinksRef} className="flex flex-row gap-2 z-2 !mb-[42px] aboslute max-[400px]:!mb-[64px]">
          <motion.div custom={0} initial="hidden" animate={isSocialLinksInView ? "visible" : "hidden"} variants={socialLinkVariants}>
            <a href="https://x.com/AugustasWeb" target="_blank" className="cursor-pointer opacity-30 hover:opacity-60 circle-none transition-opacity duration-300 ease-out">
              <img src="images/svgs/Twitter.svg" alt="icon" />
            </a>
          </motion.div>
          <motion.div custom={1} initial="hidden" animate={isSocialLinksInView ? "visible" : "hidden"} variants={socialLinkVariants}>
            <EmailPopup />
          </motion.div>
          <motion.div custom={2} initial="hidden" animate={isSocialLinksInView ? "visible" : "hidden"} variants={socialLinkVariants}>
            <a href="https://www.linkedin.com/in/augustas-web/" target="_blank" className="cursor-pointer opacity-30 hover:opacity-60 circle-none transition-opacity duration-300 ease-out">
              <img src="images/svgs/Linkedin.svg" alt="icon" />
            </a>
          </motion.div>
          <motion.div custom={3} initial="hidden" animate={isSocialLinksInView ? "visible" : "hidden"} variants={socialLinkVariants}>
            <a href="https://dribbble.com/Augustas_Web/" target="_blank" className="cursor-pointer opacity-30 hover:opacity-60 circle-none transition-opacity duration-300 ease-out">
              <img src="images/svgs/Dribble.svg" alt="icon" />
            </a>
          </motion.div>
        </div>
        <motion.div ref={bottomRef} className="flex h-fit w-full absolute bottom-[48px] items-center justify-between max-[400px]:bottom-[24px] max-[400px]:justify-between" initial="hidden" animate={isBottomInView ? "visible" : "hidden"} variants={bottomVariants}>
          <motion.p custom={0} initial="hidden" animate={isBottomInView ? "visible" : "hidden"} variants={bottomVariants} className="text-base text-[var(--gray2)]">
            AWeb © {new Date().getFullYear()}
          </motion.p>
          <motion.div custom={1} initial="hidden" animate={isBottomInView ? "visible" : "hidden"} variants={bottomVariants} className="flex flex-row items-center flex-wrap gap-4">
            <Link to="/terms" className="text-base text-[var(--gray2)] hover:text-[var(--gray1)] transition-text duration-300 ease-out circle-none">
              Terms
            </Link>
            <Link to="/privacy" className="text-base text-[var(--gray2)] hover:text-[var(--gray1)] transition-text duration-300 ease-out circle-none">
              Privacy
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;