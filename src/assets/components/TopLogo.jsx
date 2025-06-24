import { motion, useAnimation } from 'framer-motion';

const TopLogo = () => {
  const containerControls = useAnimation();
  const logoControls = useAnimation();
  const bgControls = useAnimation();

  const customEase = [0.25, 0.1, 0.1, 1.18];

  const handleMouseEnter = () => {
    containerControls.start({ opacity: 1 });
    logoControls.start({ y: -42 });
    bgControls.start({ backgroundColor: 'var(--gray3)' });
  };

  const handleMouseLeave = () => {
    containerControls.start({ opacity: 0 });
    logoControls.start({ y: 0 });
    bgControls.start({ backgroundColor: '#000000' });
  };

  const handleClick = () => {
    window.location.href = 'https://augustas.co'; 
  };

  return (
    <motion.div
      className="w-[126px] h-[126px] relative flex items-center justify-center !-mt-[42px] !-ml-[42px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94], duration: 1.3 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="w-[42px] h-[42px] overflow-hidden cursor-pointer z-10 absolute circle-none"
        animate={bgControls}
        initial={{ backgroundColor: '#000000' }}
        onClick={handleClick}
      >
        <motion.div 
          animate={logoControls} 
          transition={{ ease: customEase, duration: 0.5 }}
        >
          <img src="images/logos/MiniLogo.svg" alt="mini logo" />
          <img src="images/logos/MiniLogo.svg" alt="mini logo" className="opacity-70" />
        </motion.div>
      </motion.div>

      <motion.div
        className="w-[126px] h-[126px] !p-[24px] pointer-events-none z-20 absolute top-0 left-0"
        animate={containerControls}
        initial={{ opacity: 0 }}
        transition={{ ease: customEase, duration: 0.5 }}
      >
        <div className="h-[162px] w-[1px] bg-[linear-gradient(180deg,rgba(84,85,93,0)_0%,#54555D_39.03%,rgba(84,85,93,0.31)_67.04%,rgba(84,85,93,0)_100%)] absolute top-0 left-[42px]" />
        <div className="h-[162px] w-[1px] bg-[linear-gradient(180deg,rgba(84,85,93,0)_0%,#54555D_39.03%,rgba(84,85,93,0.31)_67.04%,rgba(84,85,93,0)_100%)] absolute top-0 right-[42px]" />

        <div className="h-[1px] w-[162px] bg-[linear-gradient(90deg,rgba(84,85,93,0)_0%,#54555D_39.03%,rgba(84,85,93,0.31)_67.04%,rgba(84,85,93,0)_100%)] absolute left-0 top-[42px]" />
        <div className="h-[1px] w-[162px] bg-[linear-gradient(90deg,rgba(84,85,93,0)_0%,#54555D_39.03%,rgba(84,85,93,0.31)_67.04%,rgba(84,85,93,0)_100%)] absolute left-0 bottom-[42px]" />
      </motion.div>
    </motion.div>
  );
};

export default TopLogo;