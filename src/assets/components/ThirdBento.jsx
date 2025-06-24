import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";

const ThirdBento = () => {
  const [toasts, setToasts] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [showRequestCard, setShowRequestCard] = useState(false);
  const [requestedItem, setRequestedItem] = useState("");
  const intervalRef = useRef(null);
  const buttonControls = useAnimationControls();

  const requestOptions = [
    "New testimonial",
    "Pricing section revamp",
    "Fix header bug",
    "Fix blog post",
    "Homepage redesign",
    "Dark mode toggle",
    "Client logo update",
    "Optimize images",
    "SEO improvements",
    "Add contact form"
  ];

  const toastMessages = [
    "Homepage layout refined",
    "Dark mode adjustments applied",
    "Animation smoothness improved",
    "Navigation bugs fixed",
    "New icons integrated",
    "Content SEO optimized",
    "Custom fonts added",
    "Footer redesigned",
    "Performance audit completed",
    "Color palette updated",
    "404 page enhanced",
    "Loading speed increased",
    "User feedback implemented",
    "Security patch installed",
    "Image optimization complete",
    "Client request deployed"
  ];

  const requestResponses = {
    "New testimonial": "Testimonial added",
    "Pricing section revamp": "Pricing updated",
    "Fix header bug": "Header bug fixed",
    "Fix blog post": "Blog post fixed",
    "Homepage redesign": "Homepage redesigned",
    "Dark mode toggle": "Dark mode enabled",
    "Client logo update": "Client logos refreshed",
    "Optimize images": "Images optimized",
    "SEO improvements": "SEO improved",
    "Add contact form": "Contact form added"
  };

  const timestampVariants = [
    "Just now",
    "Recently",
    "Moments ago",
    "Freshly added"
  ];

  const getRandomPastDate = () => {
    const now = new Date();
    const randomMinutesAgo = Math.floor(Math.random() * (60 * 24 * 90));
    return new Date(now - randomMinutesAgo * 60 * 1000);
  };

  const getRelativeTime = (date) => {
    const now = new Date();
    const diffMs = now - date;
    const diffMin = Math.floor(diffMs / 60000);
    const diffHr = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHr / 24);
    const diffMonth = Math.floor(diffDay / 30);

    if (diffMin < 1) return "Just now";
    if (diffMin < 60) return `${diffMin} min ago`;
    if (diffHr < 24) return `${diffHr} h ago`;
    if (diffDay < 30) return `${diffDay} day${diffDay > 1 ? "s" : ""} ago`;
    return `${diffMonth} month${diffMonth > 1 ? "s" : ""} ago`;
  };

  const addToast = (message, isRequest = false) => {
    const timestamp = isRequest
      ? timestampVariants[Math.floor(Math.random() * timestampVariants.length)]
      : getRelativeTime(getRandomPastDate());
    
    const newToast = {
      id: Date.now(),
      message,
      timestamp,
      isRequest
    };

    setToasts((prevToasts) => {
      const updatedToasts = [...prevToasts, newToast];
      return updatedToasts.length > 3 ? updatedToasts.slice(-3) : updatedToasts;
    });
  };

  const handleClick = () => {
    const randomRequest = requestOptions[Math.floor(Math.random() * requestOptions.length)];
    setRequestedItem(randomRequest);
    setShowRequestCard(true);

    setTimeout(() => {
      setShowRequestCard(false);
      const responseMessage = requestResponses[randomRequest] || `${randomRequest} added`;
      addToast(responseMessage, true);
    }, 1000);
  };

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(async () => {
        const randomMessage = toastMessages[Math.floor(Math.random() * toastMessages.length)];
        addToast(randomMessage);
        await buttonControls.start({ scale: 0.95, transition: { duration: 0.1 } });
        await buttonControls.start({ scale: 1, transition: { duration: 0.1 } });
      }, 2000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, buttonControls]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const getToastStyles = (isRequest) => {
    return isRequest ? "bg-[#202022] border-[#3D3D42]" : "bg-[var(--gray4)] border-[var(--gray3)]";
  };

  return (
    <div
      className="relative w-[327px] h-[327px] bg-black border border-[var(--gray3)] max-[450px]:w-full !p-[20px] rounded-[16px] overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col gap-1 z-20 relative">
        <p className="smif text-[24px] text-white">Longevity</p>
        <p className="sf text-[18px] text-[#A1A1AA] leading-[130%] max-w-[230px]">
          For a monthly fee get custom upgrades at any time, just ask
        </p>
      </div>

      <div className="w-full h-full z-[0] absolute top-0 left-0 flex items-center justify-center !pt-[40px]">
        <div className="absolute bg-[#839ABC] w-[200px] h-[60px] rounded-full blur-[80px] opacity-60" />
      </div>

      <div className="relative h-[135px]">
        <AnimatePresence>
          {toasts.map((toast, index) => {
            const reverseIndex = toasts.length - 1 - index;
            return (
              <motion.div
                key={toast.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: 1 - reverseIndex * 0.2,
                  y: -reverseIndex * 23,
                  scale: 1 - reverseIndex * 0.07,
                  zIndex: toasts.length - reverseIndex,
                }}
                exit={{ opacity: 0, y: -50, transition: { duration: 0.2 } }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`absolute bottom-0 left-0 right-0 gap-2 !px-[12px] !py-[8px] border p-3 rounded-lg shadow-[0px_-20px_40px_0px_rgba(0,0,0,0.6)] ${getToastStyles(toast.isRequest)}`}
              >
                <p className="text-white text-base font-medium">{toast.message}</p>
                <p className="alt text-sm mt-1">{toast.timestamp}</p>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center">
        <AnimatePresence>
          {showRequestCard && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-[var(--gray1)]/70 text-sm py-2 px-4 rounded-lg shadow-md !mb-1"
            >
              {requestedItem}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          animate={buttonControls}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleClick}
          className="select-none alt cursor-pointer circle-none !px-[12px] !pb-[2px] !pt-[4px] flex flex-shrink-0 items-center justify-center rounded-[10px] w-fit h-fit transition-all duration-100 ease-out bg-black border border-[var(--gray3)] hover:bg-[var(--gray4)] hover:border-[var(--gray2)]"
        >
          Press to request
        </motion.button>
      </div>
    </div>
  );
};

export default ThirdBento;