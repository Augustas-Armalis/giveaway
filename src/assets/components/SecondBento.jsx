import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const SecondBento = () => {
  const [isActive, setIsActive] = useState(false);
  const bentoRef = useRef(null);
  const augustasVideoRef = useRef(null);
  const danielVideoRef = useRef(null);

  const largeCircleVariants = {
    rest: {
      rotate: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    active: {
      rotate: 360,
      transition: {
        rotate: {
          duration: 2,
          ease: "linear",
          repeat: Infinity,
        },
      },
    },
  };

  const smallCircleVariants = {
    rest: {
      rotate: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    active: {
      rotate: -360,
      transition: {
        rotate: {
          duration: 2,
          ease: "linear",
          repeat: Infinity,
        },
      },
    },
  };

  const developmentTextVariants = {
    rest: {
      x: 0,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    active: {
      x: [0, 4, 0, -4, 0],
      y: [0, -5, 0, 5, 0],
      transition: {
        x: {
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
        },
        y: {
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
        },
      },
    },
  };

  const designTextVariants = {
    rest: {
      x: 0,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    active: {
      x: [0, -5, 0, 5, 0],
      y: [0, 3, 0, -3, 0],
      transition: {
        x: {
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
        },
        y: {
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
        },
      },
    },
  };

  const augustasVideoVariants = {
    rest: {
      x: 0,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    active: {
      x: [0, 3, 0, -3, 0],
      y: [0, -4, 0, 4, 0],
      transition: {
        x: {
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
        },
        y: {
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
        },
      },
    },
  };

  const danielVideoVariants = {
    rest: {
      x: 0,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    active: {
      x: [0, -4, 0, 4, 0],
      y: [0, 5, 0, -5, 0],
      transition: {
        x: {
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
        },
        y: {
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
        },
      },
    },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (augustasVideoRef.current) {
              augustasVideoRef.current.play().catch((error) => {
                console.error("Error playing Augustas video:", error);
              });
            }
            if (danielVideoRef.current) {
              danielVideoRef.current.play().catch((error) => {
                console.error("Error playing Daniel video:", error);
              });
            }
          } else {
            if (augustasVideoRef.current) augustasVideoRef.current.pause();
            if (danielVideoRef.current) danielVideoRef.current.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (bentoRef.current) {
      observer.observe(bentoRef.current);
    }

    return () => {
      if (bentoRef.current) {
        observer.unobserve(bentoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (bentoRef.current && !bentoRef.current.contains(event.target)) {
        setIsActive(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <motion.div
      ref={bentoRef}
      className="w-[326px] max-[1069px]:w-[327px] h-[327px] bg-black border border-[var(--gray3)] max-[450px]:w-full !p-[20px] rounded-[16px] z-20 relative overflow-hidden"
      whileHover="active"
      onClick={() => setIsActive(true)}
      animate={isActive ? "active" : "rest"}
      initial="rest"
    >
      <div className="flex flex-col gap-1 z-20 relative">
        <p className="smif text-[24px]">Connection</p>
        <p className="sf text-[18px] text-[var(--gray1)] leading-[130%] max-w-[230px]">
          Stay in touch & track entire development stages with ease
        </p>
      </div>

      <div className="w-full h-full absolute z-0 top-0 left-0 flex justify-center items-center">
        <div className="relative w-[240px] h-[220px] bg-[#839ABC] rounded-[50%] blur-[130px] z-0 bottom-[-200px] opacity-70" />
        <div className="absolute z-10 bottom-[-80px]">
          <motion.img
            src="images/svgs/BigCircler.svg"
            className="w-[260px] h-[260px]"
            alt="circle"
            variants={largeCircleVariants}
          />
          <motion.div
            className="absolute left-[20px] bottom-[205px] w-[60px] h-[60px] rounded-full overflow-hidden border border-white/20 z-90 shadow-[0_0_20px_0_rgba(0,0,0,0.5)]"
            variants={augustasVideoVariants}
          >
            <video
              ref={augustasVideoRef}
              className="w-full h-full object-cover"
              src="images/videos/augustas-pfp.mp4"
              muted
              loop
              playsInline
              autoPlay
            />
          </motion.div>
          <motion.div
            className="absolute right-[-10px] bottom-[210px] z-90 bg-black/70 !py-[3px] !px-[11px] border border-white/20 rounded-[10px] backdrop-blur-[10px] shadow-[0_0_20px_0_rgba(0,0,0,0.5)]"
            variants={developmentTextVariants}
          >
            <p className="sf select-none text-[16px] text-[#7f7f85]">Development</p>
          </motion.div>
        </div>
        <div className="absolute z-10 bottom-[-30px]">
          <motion.img
            src="images/svgs/BigCircler.svg"
            className="w-[150px] h-[150px]"
            alt="circle"
            variants={smallCircleVariants}
          />
          <motion.div
            className="absolute right-[-20px] bottom-[40px] w-[53px] h-[53px] rounded-full overflow-hidden border border-white/20 z-90 shadow-[0_0_20px_0_rgba(0,0,0,0.5)]"
            variants={danielVideoVariants}
          >
            <video
              ref={danielVideoRef}
              className="w-full h-full object-cover"
              src="images/videos/daniel-pfp.mp4"
              muted
              loop
              playsInline
              autoPlay
            />
          </motion.div>
          <motion.div
            className="absolute left-[-25px] bottom-[75px] z-90 bg-black/70 !py-[2px] !px-[10px] border border-white/20 rounded-[10px] backdrop-blur-[10px] shadow-[0_0_20px_0_rgba(0,0,0,0.5)]"
            variants={designTextVariants}
          >
            <p className="sf select-none text-[16px] text-[#7f7f85]">Design</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default SecondBento;