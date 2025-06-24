import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import CaseButton from "../components/CaseButton.jsx";
import TestimonialButton from "../buttons/TestimonialButton.jsx";
import TestimonialLink from "../buttons/TestimonialLink.jsx";

const SproutTestimonial = ({ brand, desc, case1, case2 }) => {
  const [activeTab, setActiveTab] = useState("Testimonial");
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false);
  const [hasPausedOnce, setHasPausedOnce] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isReverseStagger, setIsReverseStagger] = useState(false);

  const images = [
    { src: "images/websites/testimonials/SproutHero.webp" },
    { src: "images/websites/testimonials/PlazmaHero.webp" },
  ];

  const carouselRef = useRef(null);
  const contentRef = useRef(null);
  const mediaRef = useRef(null);

  const isContentInView = useInView(contentRef, { once: true, margin: "0px 0px -50px 0px" });
  const isMediaInView = useInView(mediaRef, { once: true, margin: "0px 0px -50px 0px" });

  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 411);
      setIsReverseStagger(window.innerWidth < 1065);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navigateCarousel = (direction) => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    setCurrentImageIndex((prevIndex) => {
      const newIndex = prevIndex + direction;
      if (newIndex >= images.length) return 0;
      if (newIndex < 0) return images.length - 1;
      return newIndex;
    });

    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
    }, 0);
  };

  const handleNextImage = () => navigateCarousel(1);
  const handlePrevImage = () => navigateCarousel(-1);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNextImage,
    onSwipedRight: handlePrevImage,
    trackMouse: true,
    preventScrollOnSwipe: true,
  });

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const flyInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1],
        delay: i * 0.15,
      },
    }),
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, transition: { duration: 0.2, ease: "easeIn" } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2, ease: "easeIn" } },
  };

  const rectangleVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3, delay: 0.2, ease: "easeInOut" } },
    exit: { opacity: 0, transition: { duration: 0.2, ease: "easeInOut" } },
  };

  const handleVideoToggle = () => {
    setIsVideoPlaying(!isVideoPlaying);
    if (!isVideoPlaying && !hasPlayedOnce) {
      setHasPlayedOnce(true);
    } else if (isVideoPlaying && !hasPausedOnce) {
      setHasPausedOnce(true);
    }
  };

  return (
    <div className="w-full h-fit flex gap-9 flex-wrap justify-center relative z-2 max-[1065px]:gap-0">
      <div className="w-full max-w-md h-fit max-[1065px]:max-w-[512px] max-[581px]:max-w-full" ref={contentRef}>
        <motion.p
          className="smif text-2xl !mb-2 !mt-10"
          variants={flyInVariants}
          initial="hidden"
          animate={isContentInView ? "visible" : "hidden"}
          custom={0}
        >
          {brand}
        </motion.p>
        <motion.p
          className="sf text-lg text-[var(--gray1)] leading-[130%]"
          variants={flyInVariants}
          initial="hidden"
          animate={isContentInView ? "visible" : "hidden"}
          custom={1}
        >
          {desc}
        </motion.p>
        <div className="flex flex-row flex-wrap gap-2 !mt-6 max-[1065px]:!mt-4 max-[1065px]:!mb-6">
          <motion.div
            variants={flyInVariants}
            initial="hidden"
            animate={isContentInView ? "visible" : "hidden"}
            custom={2}
          >
            <CaseButton title={case1} />
          </motion.div>
          <motion.div
            variants={flyInVariants}
            initial="hidden"
            animate={isContentInView ? "visible" : "hidden"}
            custom={3}
          >
            <CaseButton title={case2} />
          </motion.div>
        </div>
      </div>
      <div className="w-full max-w-lg h-fit flex flex-col gap-2 max-[1065px]:gap-[10px]" ref={mediaRef}>
        <motion.div
          ref={carouselRef}
          {...swipeHandlers}
          className="w-full max-w-lg aspect-video circle-none relative overflow-hidden rounded-[10px] border border-[var(--gray3)] order-1 min-[1065px]:order-2"
          variants={flyInVariants}
          initial="hidden"
          animate={isMediaInView ? "visible" : "hidden"}
          custom={isReverseStagger ? 0 : 3}
        >
          <AnimatePresence mode="wait">
            {activeTab === "Testimonial" && (
              <>
                <motion.div
                  key="thumbnail"
                  variants={contentVariants}
                  initial="hidden"
                  animate={isVideoPlaying ? "hidden" : "visible"}
                  exit="exit"
                  className="w-full h-full absolute top-0 left-0 cursor-pointer"
                  style={{ zIndex: isVideoPlaying ? 10 : 20 }}
                  onClick={handleVideoToggle}
                >
                  <img
                    src="images/thumbnails/AresThumbnail.webp"
                    alt="Video thumbnail"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <motion.div
                  key="video"
                  variants={contentVariants}
                  initial="hidden"
                  animate={isVideoPlaying ? "visible" : "hidden"}
                  exit="exit"
                  className="w-full h-full absolute top-0 left-0"
                  style={{ zIndex: isVideoPlaying ? 20 : 10 }}
                >
                  {isVideoPlaying && (
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/G7qvBdtHAO4?autoplay=1&modestbranding=1&rel=0&controls=1&color=white"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  )}
                </motion.div>
              </>
            )}
            {activeTab === "Website" && (
              <motion.div
                key="website"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="w-full h-full relative"
              >
                <div
                  className="w-full h-full flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                >
                  {images.map((image, index) => (
                    <div key={index} className="w-full h-full flex-shrink-0">
                      <img
                        src={image.src}
                        alt="Website"
                        className="w-full h-full object-cover"
                        draggable="false"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <div className="flex flex-row justify-between order-2 min-[1065px]:order-1">
          <div className="flex flex-row gap-2 circle-none flex-wrap">
            <motion.div
              variants={flyInVariants}
              initial="hidden"
              animate={isMediaInView ? "visible" : "hidden"}
              custom={isReverseStagger ? 3 : 0}
            >
              <TestimonialButton
                title="Testimonial"
                src="images/svgs/Star.svg"
                isActive={activeTab === "Testimonial"}
                onClick={() => {
                  setActiveTab("Testimonial");
                  setIsVideoPlaying(false);
                  setHasPlayedOnce(false);
                  setHasPausedOnce(false);
                  setCurrentImageIndex(0);
                }}
              />
            </motion.div>
            <motion.div
              variants={flyInVariants}
              initial="hidden"
              animate={isMediaInView ? "visible" : "hidden"}
              custom={isReverseStagger ? 2 : 1}
            >
              <TestimonialButton
                title="Website"
                src="images/svgs/Website.svg"
                isActive={activeTab === "Website"}
                onClick={() => {
                  setActiveTab("Website");
                  setIsVideoPlaying(false);
                  setHasPlayedOnce(false);
                  setHasPausedOnce(false);
                  setCurrentImageIndex(0);
                }}
              />
            </motion.div>
          </div>
          <motion.div
            variants={flyInVariants}
            initial="hidden"
            animate={isMediaInView ? "visible" : "hidden"}
            custom={isReverseStagger ? 1 : 2}
          >
            <AnimatePresence mode="wait">
              {activeTab === "Testimonial" && (
                <motion.div
                  key="play-video"
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="circle-none"
                >
                  <TestimonialButton
                    title={isSmallScreen ? "" : isVideoPlaying ? "Pause" : "Play video"}
                    src={isVideoPlaying ? "images/svgs/Pause.svg" : "images/svgs/Play.svg"}
                    isActive={true}
                    onClick={handleVideoToggle}
                  />
                </motion.div>
              )}
              {activeTab === "Website" && (
                <motion.div
                  key="website-actions"
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex gap-2 circle-none"
                >
                  <TestimonialButton
                    title=""
                    src="images/svgs/LeftArrow.svg"
                    isActive={true}
                    onClick={handlePrevImage}
                  />
                  <TestimonialButton
                    title=""
                    src="images/svgs/RightArrow.svg"
                    isActive={true}
                    onClick={handleNextImage}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
      <style>
        {`
          .carousel-container {
            position: relative;
            overflow: hidden;
          }
          .carousel-container .flex {
            display: flex;
            width: ${images.length * 100}%;
          }
          .carousel-container img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        `}
      </style>
      <AnimatePresence>
        {activeTab === "Website" && (
          <motion.div
            key="background-rectangle-base"
            variants={rectangleVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relativy w-full h-fit bg-[var(--gray4)] border border-[var(--gray3)] rounded-[16px] !p-4 hidden max-[1065px]:block max-[1065px]:!mt-[10px] max-[1065px]:max-w-[512px]"
          >
            <div className="flex flex-col gap-1.5">
              <TestimonialLink
                title="sproutmarketing.xyz"
                link="https://sproutmarketing.xyz"
                src="images/svgs/Link.svg"
              />
              <TestimonialLink
                title="citizens.sproutmarketing.xyz"
                link="https://citizens.sproutmarketing.xyz"
                src="images/svgs/Link.svg"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {activeTab === "Website" && (
          <motion.div
            key="background-rectangle-base"
            variants={rectangleVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute bottom-[-13px] h-fit bg-[var(--gray4)] border border-[var(--gray3)] rounded-[16px] !p-4 max-[1065px]:hidden"
            style={{
              left: 0,
              right: -10,
              zIndex: -20,
            }}
          >
            <div className="flex flex-col gap-1.5 opacity-0">
              <TestimonialLink title="s" />
              <TestimonialLink title="s" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {activeTab === "Website" && (
          <motion.div
            key="background-rectangle-content"
            variants={rectangleVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute bottom-[-13px] h-fit !p-4 !pl-5 max-[1065px]:hidden"
            style={{
              left: 0,
              right: -10,
              zIndex: 2,
            }}
          >
            <div className="flex flex-col gap-1.5">
              <TestimonialLink
                title="sproutmarketing.xyz"
                link="https://sproutmarketing.xyz"
                src="images/svgs/Link.svg"
              />
              <TestimonialLink
                title="citizens.sproutmarketing.xyz"
                link="https://citizens.sproutmarketing.xyz"
                src="images/svgs/Link.svg"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SproutTestimonial;