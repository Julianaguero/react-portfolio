import { motion } from "framer-motion";
import { translate } from "../../lib/anim";
import { textToRender } from "../../lib/data";

export default function ResumeIntro() {
  const getChars = (word: string, delay: number) => {
    const chars: JSX.Element[] = [];
    word.split("").forEach((char, i) => {
      chars.push(
        <motion.span
          custom={delay + (word.length + i) * 0.01}
          variants={translate}
          initial="initial"
          animate="enter"
          key={char + i}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };

  return (
    <section className="relative w-full h-[100dvh] md:h-screen flex flex-col justify-end  items-start pb-4 px-6 bg-green">
      <div className="order-1 mt-36 ">
        <div className="flex flex-wrap w-[90%] md:w-4/5 overflow-hidden m-0">
          {textToRender.map((text, i) => (
            <motion.p
              key={"l" + i}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.05,
                ease: [0.76, 0, 0.24, 0.5],
                delay: i * 0.1,
              }}
              className={`flex mr-2 sm:mr-4 font-small-variable font-neue-regular  overflow-hidden leading-[1] cursor-default ${text.hover}`}
            >
              {getChars(text.text, i * 0.1)}
            </motion.p>
          ))}
        </div>

        <div className=" leading-[1] cursor-default overflow-hidden">
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 60,
              delay: 0.8,
            }}
            className="font-small-variable font-neue-regular my-4 lg:my-6 leading-[1]"
          >
            BUT IF YOU DIDN'T NOTICE I'M CURRENTLY FOCUSED ON:
          </motion.p>
        </div>
        <div className="cursor-default overflow-hidden">
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 60,
              delay: 1,
            }}
            className="font-neue-medium text-[clamp(0.7rem,1rem+4.269vw,6.25rem)] leading-[1] "
          >
            FRONT-END DEVELOPMENT
          </motion.p>
        </div>
      </div>
    </section>
  );
}
