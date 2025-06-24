import React from 'react';
import { motion } from 'framer-motion';

const InfiniteSliders = () => {

  const slideWidth = 290;
  const gap = 8;

  const topImageSrcs = [
    'images/websites/dark/Softwero.webp',
    'images/websites/dark/Wation.webp',
    'images/websites/dark/EurEvo.webp',
    'images/websites/dark/Moon.webp',
    'images/websites/dark/Ferony.webp',
    'images/websites/dark/Plazma.webp',
    'images/websites/dark/Alexun.webp',
    'images/websites/dark/Babylonflow.webp',
    'images/websites/dark/ChiHous.webp',
    'images/websites/dark/YasserVfx.webp',
    'images/websites/dark/Altego.webp',
    'images/websites/dark/99tweets.webp',
    'images/websites/dark/IntellScale.webp',
  ];

  const bottomImageSrcs = [
    'images/websites/light/FlowForge.webp',
    'images/websites/light/Woodling.webp',
    'images/websites/light/Outlined.webp',
    'images/websites/light/SuperSide.webp',
    'images/websites/light/JohnDush.webp',
    'images/websites/light/QuantumMedia.webp',
    'images/websites/light/Stroupe.webp',
    'images/websites/light/OutRide.webp',
    'images/websites/light/Aiva.webp',
    'images/websites/light/GrowthView.webp',
    'images/websites/light/Cloud.webp',
    'images/websites/light/Motiejus.webp',
    'images/websites/light/FastFun.webp',
    'images/websites/light/CopyWiz.webp',
    'images/websites/light/Bupup.webp',
    'images/websites/light/Caldy.webp',
    'images/websites/light/Porsche.webp',
    'images/websites/light/Mujtama.webp',
  ];

  const topNumberOfSlides = topImageSrcs.length;
  const bottomNumberOfSlides = bottomImageSrcs.length;

  const createTopSlide = (src, index, uniqueIndex) => {
    const staggerOrder = (topNumberOfSlides - 1 - ((index + 2) % topNumberOfSlides)) % topNumberOfSlides;
    const staggerDelay = 0.2 + staggerOrder * 0.05;

    return (

      <motion.div
        key={`top-${uniqueIndex}`}
        className="h-[180px] w-[290px] overflow-hidden rounded-[10px] border border-[var(--gray4)] flex-shrink-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: staggerDelay,
          ease: [0.25, 0.46, 0.45, 0.94],
          duration: 1.3,
        }}
      >
        <div className="w-full h-full hover:opacity-70 transition-opacity ease-out duration-600 pointer-events-auto">
          <img
            src={src}
            alt="website"
            className="object-cover w-full h-full object-top"
          />
        </div>
      </motion.div>

    );
  };

  const createBottomSlide = (src, index, uniqueIndex) => {
    const staggerOrder = (index + 2) % bottomNumberOfSlides;
    const staggerDelay = 0.2 + staggerOrder * 0.05;

    return (

      <motion.div
        key={`bottom-${uniqueIndex}`}
        className="h-[180px] w-[290px] overflow-hidden rounded-[10px] border border-[var(--gray4)] flex-shrink-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: staggerDelay,
          ease: [0.25, 0.46, 0.45, 0.94],
          duration: 1.3,
        }}
      >
        <div className="w-full h-full hover:opacity-70 transition-opacity ease-out duration-600 pointer-events-auto">
          <img
            src={src}
            alt="website"
            className="object-cover w-full h-full object-top"
          />
        </div>
      </motion.div>

    );
  };

  const triplicatedTopSlides = [...topImageSrcs, ...topImageSrcs, ...topImageSrcs].map((src, i) =>
    createTopSlide(src, i % topNumberOfSlides, i)
  );
  const triplicatedBottomSlides = [...bottomImageSrcs, ...bottomImageSrcs, ...bottomImageSrcs].map((src, i) =>
    createBottomSlide(src, i % bottomNumberOfSlides, i)
  );

  const topTotalWidth = topNumberOfSlides * (slideWidth + gap) - gap;
  const bottomTotalWidth = bottomNumberOfSlides * (slideWidth + gap) - gap;
  const bottomDuration = bottomTotalWidth / (topTotalWidth / 35);

  return (

    <div className="w-[100vw] h-fit flex flex-col gap-2">

      <div className="relative w-full overflow-hidden h-[180px]">

        <motion.div
          className="flex flex-row gap-2"
          animate={{
            x: ['0px', `-${topTotalWidth}px`],
          }}
          transition={{
            ease: 'linear',
            duration: 40,
            repeat: Infinity,
          }}
        >
          {triplicatedTopSlides}
        </motion.div>

      </div>

      <div className="relative w-full overflow-hidden h-[180px]">

        <motion.div
          className="flex flex-row gap-2"
          animate={{
            x: [`-${bottomTotalWidth}px`, '0px'],
          }}
          transition={{
            ease: 'linear',
            duration: bottomDuration,
            repeat: Infinity,
          }}
        >
          {triplicatedBottomSlides}
        </motion.div>

      </div>

    </div>

  );

};

export default InfiniteSliders;