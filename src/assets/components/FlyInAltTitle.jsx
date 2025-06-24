import { motion } from 'framer-motion';

const altLetterVariants = {
  hidden: { opacity: 0, y: '30%' },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0, 0.1, 1.05],
    },
  },
};

const altContainerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.005,
    },
  },
};

const FlyInAltTitle = ({ text, className }) => {
  const splitTextIntoWords = () => {
    const words = text.split(' ');
    return words.map((word, wordIndex) => (
      <span key={`alt-${wordIndex}`} className="inline-block">
        {word.split('').map((char, charIndex) => (
          <motion.span
            key={`alt-${wordIndex}-${charIndex}`}
            variants={altLetterVariants}
            style={{ display: 'inline-block', whiteSpace: 'pre' }}
          >
            {char}
          </motion.span>
        ))}
        {wordIndex < words.length - 1 && (
          <span style={{ display: 'inline-block', whiteSpace: 'pre' }}> </span>
        )}
      </span>
    ));
  };

  return (
    <motion.p
      className={`sf text-xl alt max-w-[413px] leading-[130%] !mb-8 max-[548px]:text-[18px] ${className}`}
      variants={altContainerVariants}
      initial="hidden"
      animate="visible"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {splitTextIntoWords()}
    </motion.p>
  );
};

export default FlyInAltTitle;