import { motion } from "framer-motion";
import { useSectionInView } from "../../lib/hooks";
import persImg from "../../assets/img/img_pers_back_1.png";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden h-[100dvh] md:h-screen flex flex-col justify-end  md:grid md:grid-cols-[55%,45%] md:justify-between md:items-end pb-4 md:pl-6"
      id="home"
    >
      <div
        className="overflow-hidden absolute bg-transparent h-[100px] w-[100px] md:h-[150px] md:w-[150px] rounded-full  sm:left-[45%] sm:top-[26%] left-[65%] top-[50%] lg:left-[48%] lg:top-[30%]"
        aria-hidden
      >
        <motion.div
        initial={{ opacity: 0.3, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "tween",
          duration: 0.5,
        }}
        className="z-10 bg-[#FF6363] h-[100px] w-[100px] md:h-[150px] md:w-[150px] rounded-full  sm:left-[45%] sm:top-[26%] left-[65%] top-[50%] lg:left-[48%] lg:top-[30%]"
        ></motion.div>
      </div>
      <div className="order-2">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "tween",
            duration: 0.3,
          }}
          className="w-full h-[40vh] md:h-[80vh] bg-[#CEBABA]/80 flex items-end justify-center overflow-hidden"
        >
          <img
            className="md:w-full w-auto h-full  object-cover"
            src={persImg}
            alt="Julian Agüero portrait"
            width="476"
            height="603"
          />
        </motion.div>
      </div>
      <div className="order-1 mt-36 pl-4 md:pl-0">
        <motion.h1
          className="w-full mt-4"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-small font-neue-regular">HELLO, I&apos;M</span>
          <br />
          <span className="font-kristi text-[70px] pl-10 md:text-[clamp(100px,10vw,250px)] leading-[1] lg:pl-8 block">
            Julian Agüero
          </span>
        </motion.h1>

        <motion.div
          className="flex flex-col items-start justify-start leading-[1] mt-4"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex md:flex-col justify-start gap-2 md:gap-0">
            <p className="md:flex-1 text-[25px] md:font-big ">FRONT-END</p>
            <p className="md:flex-1  text-[25px] lg:ml-60 md:font-big  z-10">
              DEVELOPER
            </p>
          </div>
          <p className="font-small mt-4 mb-4 md:mb-0">
            BASED IN MADRID, SPAIN.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
