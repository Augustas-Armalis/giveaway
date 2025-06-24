import { motion } from 'framer-motion';
import SpotsLeft from "../components/SpotsLeft.jsx";

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

const titleLineVariants = {
  hidden: { opacity: 1 },
  visible: (lineIndex) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.02,
      delayChildren: lineIndex === 1 ? 0.2 : 0,
    },
  }),
};

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

const HeroTitle = ({ spots }) => {

  const titleLines = [
    'Yes, we build websites',
    'and not regular ones',
  ];

  const altText = 'Helping Start-ups get the best quality sites on the market which will sign new clients for you';

  const serifWord = 'regular';

  const splitLineIntoWords = (line, lineIndex) => {
    const words = line.split(' ');
    return words.map((word, wordIndex) => (

      <span key={`${lineIndex}-${wordIndex}`} className="inline-block">
        {word.split('').map((char, charIndex) => (

          <motion.span
            key={`${lineIndex}-${wordIndex}-${charIndex}`}
            variants={titleLetterVariants}
            className={lineIndex === 1 && word === serifWord ? 'serif' : ''}
            style={{
              display: 'inline-block',
              whiteSpace: 'pre',
              marginRight: char === 'Y' ? '-6px' : undefined,
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

  const splitAltTextIntoWords = () => {
    const words = altText.split(' ');
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

    <>

      <div className="flex w-fit !mt-[42px] max-[548px]:!mt-[36px]">
        <SpotsLeft spots={spots} className="!opacity-0 cursor-default" />
      </div>

      <div className="smif text-[58px] leading-[115%] !mb-4 max-[1064px]:text-[50px] max-[548px]:text-[36px] max-[548px]:!mb-2">

        {titleLines.map((line, lineIndex) => (

          <motion.div
            key={lineIndex}
            custom={lineIndex}
            variants={titleLineVariants}
            initial="hidden"
            animate="visible"
            className="block overflow-hidden"
            style={{ position: 'relative' }}
          >
            {splitLineIntoWords(line, lineIndex)}
          </motion.div>

        ))}

      </div>

      <motion.p
        className="sf text-xl alt max-w-[413px] leading-[130%] !mb-8 max-[548px]:text-[18px]"
        variants={altContainerVariants}
        initial="hidden"
        animate="visible"
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        {splitAltTextIntoWords()}
      </motion.p>

    </>

  );

};

export default HeroTitle;