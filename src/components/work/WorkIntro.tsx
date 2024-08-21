import { motion } from "framer-motion";

export default function WorkIntro() {
  return (
    <section className="w-full h-full lg:h-[80vh] flex flex-col lg:flex-row lg:items-center pt-28 lg:pt-0 px-4 pb-20">
      <div className="lg:flex-1  mb-8 overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 60,
            delay: 0.2,
          }}
          className="font-medium"
        >
          PROJECTS
        </motion.h1>
      </div>
      <div className="lg:flex-1 overflow-hidden">
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 60,
            delay: 0.5,
          }}
          className=" font-small-variable leading-none w-1/2 lg:w-3/4"
        >
          Below is a list of selected projects I have done. If you have any
          questions or would like to chat about other things I’ve worked on,
          feel free to{" "}
          <a href="mailto:julianaguero@gmail.com" className="underline">
            PING ME.
          </a>
        </motion.p>
      </div>
    </section>
  );
}
