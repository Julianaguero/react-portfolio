
import { motion } from "framer-motion";
import { useState } from "react";
import {ListedAttributes, ActiveText} from "../index";
// import { useSectionInView } from "@/lib/hooks";

export default function About() {
const [isOpen, setIsOpen] = useState(false)

const handleClick = () => {
  setIsOpen(!isOpen)
  console.log(isOpen)
}

  return (
    <motion.section
      className="relative flex flex-col items-center justify-end leading-8 scroll-mt-60 bg-[#1C1C1C] w-full min-h-screen h-[55rem] sm:h-[50rem] lg:h-screen -mt-24 z-10"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 100 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <ActiveText isOpen={isOpen} handleClick={handleClick}/>
      <ListedAttributes isOpen={isOpen}/>
      <motion.button
        className={`self-end text-white text-[30px] mr-10 mb-10 cursor-pointer z-50 transition-all duration-150 ease ${isOpen ? "hidden" : ""}` }
        initial={{ opacity: 0, y: 100 }}
        animate={isOpen ? { opacity: 0, y: 0 } : { opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        onClick={handleClick}
      >
        more about me
      </motion.button>
    </motion.section>
  );
}
