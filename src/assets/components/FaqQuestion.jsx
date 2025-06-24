import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const customEase = [0.4, 0, 0.2, 1];

const FaqQuestion = ({ question, answer }) => {

  const [isOpen, setIsOpen] = useState(false);

  const contentVariants = {
    hidden: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.35,
        ease: customEase,
      },
    },
    visible: {
      height: 'auto',
      opacity: 1,
      transition: {
        duration: 0.35,
        ease: customEase,
      },
    },
  };

  const arrowVariants = {
    closed: { rotate: 0, opacity: 0.7 },
    open: { rotate: 90, opacity: 1 },
  };

  const containerVariants = {
    closed: { backgroundColor: '#000000' },
    open: { backgroundColor: 'var(--gray4)' },
  };

  return (

    <motion.div
      className="max-w-[600px] w-full rounded-[12px] flex flex-col border border-[var(--gray3)] overflow-hidden circle-none"
      variants={containerVariants}
      animate={isOpen ? 'open' : 'closed'}
      transition={{ duration: 0.3, ease: customEase }}
    >

      <motion.div
        className="w-full !pl-4 !pr-[40px] !pt-2 !pb-2 flex relative items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
        transition={{ duration: 0.2 }}
      >

        <p className="smif text-[20px] select-none">{question}</p>

        <motion.img
          src="images/svgs/RightArrow.svg"
          alt="icon"
          className="w-4 h-4 absolute right-4"
          variants={arrowVariants}
          animate={isOpen ? 'open' : 'closed'}
          transition={{ duration: 0.3, ease: customEase }}
        />

      </motion.div>

      <AnimatePresence>
        {isOpen && (

          <motion.div
            className="w-full overflow-hidden"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >

            <div className="w-full bg-[var(--gray3)] h-[1px] !mt-0 !mb-2" />

            <div className="w-full !px-4 !pt-1 !pb-3">
              <p className="alt text-[16px]">{answer}</p>
            </div>

          </motion.div>

        )}
      </AnimatePresence>

    </motion.div>

  );

};

export default FaqQuestion;