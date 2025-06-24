import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const UnavailableLink = ({ title }) => {

  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleClick = () => {
    setTooltipVisible(true);
    setTimeout(() => setTooltipVisible(false), 2000);
  };

  return (

    <div
      className="relative inline-block"
      onMouseEnter={() => setTooltipVisible(true)}
      onMouseLeave={() => setTooltipVisible(false)}
    >

      <div
        className="sf text-[18px] cursor-pointer circle-none text-white/80 hover:text-white transition-colors duration-300 ease-out"
        onClick={handleClick}
      >
        {title}
      </div>

      <AnimatePresence>
        {isTooltipVisible && (
          <motion.div
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 !mb-2 !px-3 !py-1 border border-[var(--gray3)] flex text-nowrap bg-black text-white text-sm rounded-[10px] alt"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            Coming soon...
          </motion.div>
        )}
      </AnimatePresence>

    </div>

  );

};

export default UnavailableLink;