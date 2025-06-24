import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const titleLetterVariants = {
  hidden: { opacity: 0, y: '40%' },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0, 0.1, 1.05],
    },
  },
};

const FlyInTitle = ({ title, className, staggerTime = 0.02 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -50px 0px' });

  const titleLineVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerTime,
      },
    },
  };

  const splitLineIntoWords = (line) => {
    const words = line.split(' ');
    return words.map((word, wordIndex) => (
      <span key={`word-${wordIndex}`} className="inline-block">
        {word.split('').map((char, charIndex) => (
          <motion.span
            key={`char-${wordIndex}-${charIndex}`}
            variants={titleLetterVariants}
            style={{
              display: 'inline-block',
              whiteSpace: 'pre',
            }}
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
    <motion.div
      ref={ref}
      variants={titleLineVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={`smif text-[36px] block overflow-hidden text-center leading-tight max-[548px]:text-[30px] ${className}`}
      style={{ position: 'relative' }}
    >
      {splitLineIntoWords(title)}
    </motion.div>
  );
};

export default FlyInTitle;