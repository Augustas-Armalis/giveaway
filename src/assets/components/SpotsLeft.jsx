import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const SpotsLeft = ({ spots, className }) => {
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
  const nextMonthDate = new Date(currentDate.setMonth(currentDate.getMonth() + 1));
  const nextMonth = nextMonthDate.toLocaleString('default', { month: 'long' });

  let displayText = `${spots} spots left this ${currentMonth}`;
  if (spots === 0) {
    displayText = `Save a spot in ${nextMonth}`;
  } else if (spots === 1) {
    displayText = `${spots} spot left this ${currentMonth}`;
  }

  const circleVariants = {
    initial: {
      width: '7px',
      height: '7px',
      opacity: 1,
      scale: 1,
    },
    animate: {
      width: '18px',
      height: '18px',
      opacity: 0,
      scale: 1.5,
      transition: {
        duration: 1,
        ease: 'easeOut',
        repeat: Infinity,
        repeatDelay: 0.2,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0, 0.1, 1],
        delay: index * 0.17, // Stagger of 0.17s between elements
      },
    }),
  };

  // Create a ref for the container to track visibility
  const ref = useRef(null);
  // Use useInView to detect when the component is in view
  const isInView = useInView(ref, { once: true, amount: 0.5 }); // Trigger when 50% of the component is visible, only once

  return (
    <div ref={ref} className="flex flex-col items-center justify-center ">
      <motion.div
        custom={0}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-fit h-fit flex flex-row gap-2 bg-[var(--gray4)] border items-center border-[var(--gray3)] !py-[3px] !pr-[14px] !pl-[10px] rounded-full"
      >
        <div className="h-[18px] w-[18px] flex items-center justify-center relative">
          <div className="w-[12px] h-[12px] rounded-full bg-[#10FF2C] absolute z-20" />
          <div className="w-[12px] h-[12px] rounded-full bg-[#10FF2C] absolute z-18 blur-[6px]" />
      
          {/* Animated circle with Framer Motion */}
          <motion.div
            className="rounded-full border border-[#10FF2C] absolute z-19"
            variants={circleVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
          />
        </div>
        <p className="smif text-[18px] gradient-text">
          {spots === 0 ? displayText : `${spots} ${displayText.split(' ').slice(1).join(' ')}`}
        </p>
      </motion.div>
      <motion.p
        custom={1}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={`sf text-[15px] spots-below ${className}`}
      >
        taking up to 3 per month
      </motion.p>
    </div>
  );
};

export default SpotsLeft;