import { motion } from "framer-motion";


export default function ListedAttributes({isOpen} : {isOpen: boolean}) {
  return (
    <div className="text-center my-auto w-full  sm:max-w-[90%] lg:max-w-[1100px] text-center leading-[0.8] flex justify-center md:items-center gap-0 sm:gap-4 px-2 sm:p-0">
        <motion.ul 
         initial={{ opacity: 0, y: 100 }}
         animate={isOpen ? { opacity: 0, y: -100 } : { opacity: 1, y: 0 }}
         transition={{ delay: 0.175 }}
        className="w-full flex flex-wrap items-center justify-center leading-[1.2] text-white md:text-[30px] text-[25px] ">
          <li className="flex items-center justify center">
            <span className="circle">•</span> GUITAR ENTHUSIAST
          </li>
          <li className="flex items-center font-neue-light ">
            <span className="circle">•</span> PLANT LOVER
          </li>
          <li className="flex items-center justify center">
            <span className="circle">•</span> NEW FLAVORS EXPLORER
          </li>
          <li className="flex items-center font-neue-light">
            <span className="circle">•</span> CODE ARTISAN
          </li>
          <li className="flex items-center ">
            <span className="circle">•</span> SOCIAL GAMER
          </li>
          <li className="flex items-center font-neue-light">
            <span className="circle">•</span> MUSIC NOMAD
          </li>
        </motion.ul>
      </div>
  )
}
