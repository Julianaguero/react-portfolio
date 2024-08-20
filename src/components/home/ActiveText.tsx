import { motion } from "framer-motion";

interface ActiveTextProps { 
    isOpen: boolean,
    handleClick: () => void,
}

export default function ActiveText({ isOpen, handleClick }: ActiveTextProps) {
  return (
    <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full flex md:flex-row items-start justify-between text-white md:py-20 sm:py-10 px-5 md:px-10 gap-10 md:gap-0">
      <motion.button
        initial={{ opacity: 0, x: 100 }}
        animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 0 }}
        transition={{ delay: 0.300 }}
        onClick={handleClick}
        className="font-small"
      >
        <span className="circle">•</span>about
      </motion.button>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 0 }}
        transition={{ delay: 0.300 }}
        className="leading-5 sm:leading-6  md:leading-9 sm:text-[1.8rem] lg:text-[40px] text-[20px] w-1/2 text-balance basis-2/3 h-full"
      >
        <p className="mb-8">
          After earning my degree in Psychology, I decided to channel my passion
          for creativity and problem-solving into programming. My main toolkit
          includes <span className="text-green">React,</span> <span className="text-pink">Next.js,</span> and a dash of <span className="text-blue-500">TypeScript,</span> while my backend
          skills are rooted in <span className="text-yellow-300">Node.js,</span> <span className="text-red">Express,</span> and <span className="text-cyan">MongoDB.</span> I love exploring
          new technologies and continuously expanding my knowledge.
        </p>
        <p className="mb-8">
          My background in HR and management has honed my ability <span className="text-green">to connect
          with people,</span> <span className="text-blue-500">lead teams,</span> and navigate challenges 
          <span className="text-pink"> with effective communication</span> and a <span className="text-yellow-300">collaborative spirit.</span> I’ve successfully led
          projects, mentored new hires, and streamlined processes, always with a <span className="text-red">focus on making things better.</span>
          
        </p>
        <p>
          When I'm not coding, I enjoy playing video games, cooking and playing
          the guitar.
        </p>
      </motion.div>
    </div>
  );
}
