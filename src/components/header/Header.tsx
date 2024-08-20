import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { links } from "../../lib/data";
import { useActiveSectionContext } from "../../hooks/useActiveSectionContext";

export default function Header() {
  const { activeSection, setActiveSection } = useActiveSectionContext();

  return (
    <header className="fixed sm:top-[1rem] h-38 z-[999] w-full left-1/2 -translate-x-1/2">
      <nav className="w-full flex justify-between items-start sm:h-full py-2 sm:top-[1.15rem] sm:h-[initial] sm:py-0">
        <div
              className="bg-white flex flex-col md:flex-row text-end md:gap-2 font-regular px-[14px] md:pr-[30px] md:pl-6 py-[13px] leading-[1.2] text-xl  sm:text-[2rem]"
              >
          <motion.div

            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Link
              // className="bg-white flex flex-col md:flex-row text-end md:gap-2 font-regular px-[14px] md:pr-[30px] md:pl-6 py-[13px] leading-[1.2] text-xl  sm:text-[2rem]"
              to="/"
            >
              jul. portfolio
            </Link>
          </motion.div>
        </div>
        <ul className="bg-white flex flex-col h-full md:flex-row text-end md:gap-2 font-regular px-[14px] md:pr-[30px] md:pl-6 py-[13px] leading-[1.2]">
          {links.map((link) => (
            <motion.li
              className={`relative flex justify-center items-center transition-colors ${activeSection === link.name ? link.active : ""}`}
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <NavLink
                className={` ${link.hover} tracking-tighter nav-link text-xl sm:text-[2rem] transition dark:text-white dark:hover:text-gray-300`}
                onClick={() => {
                  setActiveSection(link.name);
                }}
                to={link.hash}
              >
                {link.name}
              </NavLink>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
