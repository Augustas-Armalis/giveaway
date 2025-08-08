import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import FlyInTitle from "../components/FlyInTitle.jsx";
import FlyInAltTitle from "../components/FlyInAltTitle.jsx";
import EmailPopup from "../components/EmailPopup.jsx";
import { useState, useRef } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

// Editable variables at the top
const HERO_IMAGE_SRC = "../images/giveaways/lunor1.webp";
const HERO_TITLE = "8 Free Premium Designs From Lunor Design Library";
const FIGMA_LINK = "https://www.figma.com/design/FYcLpkhKBSfDxcVg3SxC4c/6-Free-SaaS-Hero-Designs?node-id=0-1&t=JS4O3waGEGiRXIzJ-1";

const Lunor1 = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);
  const lottieRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const customEasing = [0.4, 0.0, 0.2, 1.2];

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 1,
        ease: customEasing,
      },
    },
  };

  const actionFlyInVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 1,
        ease: customEasing,
      },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const footerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const name = e.target.name.value;
    const email = e.target.email.value;
    const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiNmQzMWU0ZjgyMDk0NTYzMWE1YWMxZDU1NWViM2EzNGI3ZmFjYzg4ZGE5MGIyMmU1MTc3YTA1M2JhNzhmMTI1MzY4ZmQwN2FlNWIyOWQ0ZDMiLCJpYXQiOjE3NTI3NTI1MDkuMzcyOTkzLCJuYmYiOjE3NTI3NTI1MDkuMzcyOTk2LCJleHAiOjQ5MDg0MjYxMDkuMzY5MTI0LCJzdWIiOiI4Mzc1ODgiLCJzY29wZXMiOltdfQ.fqaFzJYQDda_Jx2-00-loIXAA1mtOqhmWYQnxVRHPEfLcThB1OdQa_Vss_LynaFjia2-_cEIC-q8EML6XfarfKf4Cd-cxwa6_LNxq8_eK-1LvtyE_QtzANp9k1-NEMYQVzx79xYKpB655XJz8y2_zzoPXG3eWrgp3dIcsv0Nv9XHaCB7OomKXsxsrhEIcs7OSwRGXgyawW0vIfnn7TrhOlG4R2Wl36XIfc5Q9TuZnRuOW8Yq8d0xDrB6sH5H-4T_Wx07WreJq7lEThI2RRQE1Ea_EiEyazSE9e-8lun5tJcZTjIgFn9V5vDZ_36CMjW_1qUu7HENAylQZOfK6JqF-mhlagyKNrsx2xvJ7rouH2HBfFeWiG8NYQUJVTW0IfPYWNI8obSMt4J2BX114XmAJcj_B8gHs1lwi_-h4lAK-Ir0KkRCB8Va-8DhWM_bJPT151FcZlC_4Andz2fWo_2WRmtq0XLlIu9JoenFaWsCJ6RBpyC4EFAYHLXIlIhLZlU9EJc7gn1n_-eu9cG6Qx_iXPTgQ7vSMxgl2jUDQPiULffmff_UiP5HM9VhHJXeG_Y_q9FHdtsI9XLPiR-K0_tGp-_Zw98wZ5nWDbW1QJfHDtdmSY8nNr4YMRHZI211c0mYPANRoHamLNA6uTwPhWahRnjPDqJ6we1ZdUlrjBFbubg';

    try {
      const groupResponse = await fetch('https://connect.mailerlite.com/api/groups?filter[name]=lunorwaitlist', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
      });

      if (!groupResponse.ok) {
        throw new Error('Failed to retrieve group information');
      }

      const groupData = await groupResponse.json();
      const groupId = groupData.data[0].id;

      const subscribeResponse = await fetch('https://connect.mailerlite.com/api/subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          email,
          fields: { name },
          groups: [groupId],
        }),
      });

      if (!subscribeResponse.ok) {
        throw new Error('Subscription failed');
      }

      setSubmissionResult('success');
    } catch (error) {
      setSubmissionResult('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmissionResult(null);
  };

  return (
    <div className="w-screen h-screen overflow-x-hidden flex max-[1064px]:flex-col-reverse">
      <motion.div variants={fadeInVariants} initial="hidden" animate="visible" className="z-[20000]">
        <a
          href="https://augustas.co" target="_blank"
          className="hover:opacity-70 transition-opacity duration-300 ease-out absolute top-[24px] left-[24px] hidden max-[1064px]:block"
        >
          <img src="../../images/logos/MiniLogo.svg" alt="logo" className="w-[42px] h-[42px]" />
        </a>
      </motion.div>

      <div className="w-[800px] h-full bg-black flex flex-col justify-center items-center !px-[64px] !py-[32px] relative max-[1064px]:!px-[16px] max-[1064px]:!py-[24px] max-[1064px]:w-full max-[1064px]:h-[60vh] max-[1064px]:justify-between max-[1064px]:!pt-[32px] max-[1064px]:!pb-[16px] z-[200]">
        <div className="absolute top-[-200px] left-0 w-screen h-[200px] max-[440px]:h-[100px] max-[440px]:top-[-100px] pointer-events-none">
          <div className="absolute inset-0 backdrop-blur-[4px] bg-black/10 [mask-image:linear-gradient(to_top,black,transparent)] [-webkit-mask-image:linear-gradient(to_top,black,transparent)]" />
          <div className="absolute inset-0 backdrop-blur-[20px] bg-black/30 [mask-image:linear-gradient(to_top,black,transparent)] [-webkit-mask-image:linear-gradient(to_top,black,transparent)]" />
          <div className="absolute inset-0 backdrop-blur-[12px] bg-black [mask-image:linear-gradient(to_top,black,transparent)] [-webkit-mask-image:linear-gradient(to_top,black,transparent)]" />
        </div>

        <motion.div variants={fadeInVariants} initial="hidden" animate="visible">
          <a
            href="https://augustas.co" target="_blank"
            className="hover:opacity-70 transition-opacity duration-300 ease-out absolute top-[32px] left-[64px] max-[1064px]:hidden"
          >
            <img src="../../images/logos/MiniLogo.svg" alt="logo" className="w-[42px] h-[42px]" />
          </a>
        </motion.div>

        <div>
          {submissionResult === null && (
            <motion.div
              className="flex flex-col gap-6 max-[1064px]:top-[-42px] relative"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >

              

              
              <div className="flex flex-col gap-2">
                <FlyInTitle
                  title={HERO_TITLE}
                  className="max-w-[404px] text-start !text-[32px] max-[1064px]:text-center max-[440px]:!text-[28px]"
                  staggerTime={0.01}
                />
                <FlyInAltTitle
                  text="Get a copy by filling in the form below"
                  className="!max-w-[404px] text-start !text-[18px] max-[1064px]:text-center max-[440px]:!text-[16px] !mb-[16px]"
                />
              </div>
              <motion.form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 p-12 max-w-[404px]"
                variants={containerVariants}
              >
                <div className="flex flex-row gap-3 max-[404px]:flex-col">
                  <motion.input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="bg-[var(--gray4)] leading-[130%] max-w-[200px] w-full max-[404px]:max-w-full !pt-[8px] !pb-[7px] !pl-[19px] !pr-[19px] border border-[var(--gray3)] text-base text-white placeholder-alt rounded-[10px] px-5 py-4 outline-none transition-colors duration-200 ease-in-out hover:bg-[var(--gray3)]/80 hover:border-[var(--gray2)]/80 focus:bg-[var(--gray3)]/80 focus:border-[var(--gray2)]/80"
                    variants={itemVariants}
                    required
                  />
                  <motion.input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    className="bg-[var(--gray4)] leading-[130%] max-w-[200px] w-full max-[404px]:max-w-full !pt-[8px] !pb-[7px] !pl-[19px] !pr-[19px] border border-[var(--gray3)] text-base text-white placeholder-alt rounded-[10px] px-5 py-4 outline-none transition-colors duration-200 ease-in-out hover:bg-[var(--gray3)]/80 hover:border-[var(--gray2)]/80 focus:bg-[var(--gray3)]/80 focus:border-[var(--gray2)]/80"
                    variants={itemVariants}
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full cursor-pointer select-none bg-white border border-black flex items-center justify-center rounded-[10px] h-fit !pt-[4px] !pb-[7px] !pl-[19px] !pr-[19px] transition-opacity ease-out duration-500 hover:!opacity-70 disabled:!opacity-50"
                  variants={itemVariants}
                >
                  <p className="smif text-black text-[18px] leading-[115%] !pt-[4px]">
                    {isSubmitting ? 'Submitting...' : 'Get designs'}
                  </p>
                </motion.button>
              </motion.form>
            </motion.div>
          )}

          {submissionResult === 'success' && (
            <motion.div
              className="flex flex-col gap-6 p-12 max-w-[404px]"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div ariants={actionFlyInVariants} className="w-full h-full flex flex-col items-center max-[1064px]:!mb-[100px]">

              <div ref={lottieRef} className="w-full h-fit flex items-center justify-center">
                <DotLottieReact
                  src="https://lottie.host/dc29b91d-02d0-45ee-92ff-1940917a12c1/EdY0IxwWnQ.lottie"
                  autoplay={true}
                  loop={false}
                  style={{ width: '70px', height: '70px' }}
                  onComplete={() => {
                    console.log('Animation completed');
                    if (lottieRef.current) {
                      lottieRef.current.pause();
                    }
                  }}
                  onLoad={() => {
                    console.log('Animation loaded');
                  }}
                  onError={(error) => {
                    console.error('Animation error:', error);
                  }}
                />
              </div>


                <p className="text-center smif text-[24px] w-full !mb-2">Thankyou!</p>
                <p className="text-base">Get designs by clicking <a href={FIGMA_LINK} className="text-blue-400 underline" target="_blank">here</a></p>

                <p className="text-base !mt-4 !px-[42px] text-center max-w-[320px]">P.S. If you'd like me to roast your hero section, check <a href="https://roast.augustas.co" className="text-blue-400 underline" target="_blank"> this</a> out</p>



              </motion.div>
            </motion.div>
          )}

          {submissionResult === 'error' && (
            <motion.div
              className="flex flex-col gap-6 p-12 max-w-[404px]"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >



                <motion.div ariants={actionFlyInVariants} className="w-full h-full flex flex-col items-center max-[1064px]:!mb-[100px]">

                <div ref={lottieRef} className="w-full h-fit flex items-center justify-center">
                  <DotLottieReact
                    src="https://lottie.host/03a6bdf9-e4a4-4dd9-a37c-a7b76c0d6268/y6MZDpgafZ.lottie"
                    autoplay={true}
                    loop={false}
                    style={{ width: '70px', height: '70px' }}
                    onComplete={() => {
                      console.log('Animation completed');
                      if (lottieRef.current) {
                        lottieRef.current.pause();
                      }
                    }}
                    onLoad={() => {
                      console.log('Animation loaded');
                    }}
                    onError={(error) => {
                      console.error('Animation error:', error);
                    }}
                  />
                </div>



                <p className="text-center smif text-[24px] w-full !mb-2">Uh oh...</p>
                <p className="text-base !mb-4">Something wen't wrong</p>




              <motion.a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleReset();
                }}
                className="w-fit cursor-pointer select-none bg-white border border-black flex items-center justify-center rounded-[10px] h-fit !pt-[4px] !pb-[7px] !pl-[19px] !pr-[19px] transition-opacity ease-out duration-500 hover:!opacity-70 disabled:!opacity-50"
                variants={actionFlyInVariants}
              >
                <p className="smif text-black text-[18px] leading-[115%] !pt-[4px]">Try again</p>
              </motion.a>











              </motion.div>



            </motion.div>
          )}
        </div>

        <motion.div
          className="flex flex-row justify-between w-full items-center"
          variants={footerContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className="!text-base text-[var(--gray2)] bottom-[32px] left-[64px] absolute max-[1064px]:relative max-[1064px]:left-0 max-[1064px]:bottom-0"
            variants={itemVariants}
          >
            AWeb © {new Date().getFullYear()}
          </motion.p>

          <motion.div
            className="flex flex-row gap-1 z-2 bottom-[32px] absolute right-[64px] max-[1064px]:relative max-[1064px]:right-0 max-[1064px]:bottom-0"
            variants={footerContainerVariants}
          >
            <motion.div variants={itemVariants}>
              <a
                href="https://x.com/AugustasDesign"
                target="_blank"
                className="cursor-pointer opacity-30 hover:opacity-60 circle-none transition-opacity duration-300 ease-out"
              >
                <img src="../../images/svgs/Twitter.svg" alt="icon" className="w-[24px] h-[24px]" />
              </a>
            </motion.div>
            <motion.div variants={itemVariants}>
              <EmailPopup newSrc="../../images/svgs/Email.svg"/>
            </motion.div>
            <motion.div variants={itemVariants}>
              <a
                href="https://www.linkedin.com/in/augustas-web/"
                target="_blank"
                className="cursor-pointer opacity-30 hover:opacity-60 circle-none transition-opacity duration-300 ease-out"
              >
                <img src="../../images/svgs/Linkedin.svg" alt="icon" className="w-[24px] h-[24px]" />
              </a>
            </motion.div>
            <motion.div variants={itemVariants}>
              <a
                href="https://dribbble.com/Augustas_Web/"
                target="_blank"
                className="cursor-pointer opacity-30 hover:opacity-60 circle-none transition-opacity duration-300 ease-out"
              >
                <img src="../../images/svgs/Dribble.svg" alt="icon" className="w-[24px] h-[24px]" />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="w-full h-full bg-gray-800 max-[1064px]:h-[50vh] max-[440px]:h-[40vh]"
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
      >
        <img
          src={HERO_IMAGE_SRC}
          alt="image"
          className="object-cover object-center w-full h-full"
        />
      </motion.div>
    </div>
  );
};

export default Lunor1;