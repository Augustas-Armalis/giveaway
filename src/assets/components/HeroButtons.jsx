import { motion } from 'framer-motion';
import { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';
import ButterflyBtn from '../buttons/ButterflyBtn.jsx';
import MainBtn from '../buttons/MainBtn.jsx';

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0, 0.1, 1],
      delay: 0.2 + (index * 0.17),
    },
  }),
};

const HeroButtons = () => {

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"aweb"});
      cal('ui', {
        cssVarsPerTheme: {
          light: { 'cal-brand': '#ffffff' },
          dark: { 'cal-brand': '#fafafa' },
        },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();
  }, []);

  return (

    <div className="flex gap-2">

      <motion.div
        custom={0}
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
      >
        <ButterflyBtn title="Let's talk" />
      </motion.div>

      <motion.div
        custom={1}
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
      >
        <MainBtn title="Pricing" targetId="pricing" />
      </motion.div>

    </div>

  );

};

export default HeroButtons;