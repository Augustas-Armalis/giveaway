import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const RecentBrands = () => {
  const textRef = useRef(null);
  const carouselRef = useRef(null);
  const isTextInView = useInView(textRef, { once: true, margin: "0px 0px -50px 0px" });
  const isCarouselInView = useInView(carouselRef, { once: true, margin: "0px 0px -50px 0px" });

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0, 0.1, 1],
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0, 0.1, 1],
        delay: index * 0.08,
      },
    }),
  };

  const logos = [
    { src: "images/logos/Plazma.svg", alt: "Plazma" },
    { src: "images/logos/Frostchanger.svg", alt: "Frostchanger" },
    { src: "images/logos/Sprout.svg", alt: "Sprout" },
    { src: "images/logos/Copywiz.svg", alt: "Copywiz" },
    { src: "images/logos/Motiejus.svg", alt: "Motiejus" },
    { src: "images/logos/Plazma.svg", alt: "Plazma" },
    { src: "images/logos/Frostchanger.svg", alt: "Frostchanger" },
    { src: "images/logos/Sprout.svg", alt: "Sprout" },
    { src: "images/logos/Copywiz.svg", alt: "Copywiz" },
    { src: "images/logos/Motiejus.svg", alt: "Motiejus" },
  ];

  return (
    <div className="w-full relative h-fit mx-8 max-[640px]:mx-4 flex flex-col items-center justify-center gap-4">
      <motion.p
        ref={textRef}
        className="sf text-[var(--gray2)] text-base"
        variants={textVariants}
        initial="hidden"
        animate={isTextInView ? "visible" : "hidden"}
      >
        Recent brands we worked with
      </motion.p>
      <div ref={carouselRef} className="relative overflow-hidden max-w-[1000px] max-[1064px]:w-full">
        <div className="h-[50px] w-[100px] bg-gradient-to-l from-black/0 to-black absolute left-0 z-10" />
        <div className="h-[50px] w-[100px] bg-gradient-to-r from-black/0 to-black absolute right-0 z-10" />
        <div className="flex flex-row gap-10 w-fit h-[40px] max-[1064px]:h-[32px] animate-infinite-scroll">
          {[...logos, ...logos].map((logo, index) => (
            <motion.img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="relative z-0 h-full w-auto"
              variants={logoVariants}
              initial="hidden"
              animate={isCarouselInView ? "visible" : "hidden"}
              custom={index % logos.length} // Use modulo to stagger both sets consistently
            />
          ))}
        </div>
      </div>
      <style jsx>{`
        .animate-infinite-scroll {
          animation: infinite-scroll 20s linear infinite;
        }
        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @media (max-width: 1064px) {
          .animate-infinite-scroll {
            animation-duration: 15s;
          }
        }
        @media (max-width: 640px) {
          .animate-infinite-scroll {
            animation-duration: 12s;
          }
        }
      `}</style>
    </div>
  );
};

export default RecentBrands;