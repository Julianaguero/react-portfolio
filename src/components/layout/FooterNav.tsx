import { NavLink } from "react-router-dom";
import { links } from "../../lib/data";
import { useActiveSectionContext } from "../../hooks/useActiveSectionContext";

export default function FooterNav() {
  const { activeSection, setActiveSection } = useActiveSectionContext();

  return (
    <div className=" bg-[#1C1C1C] px-8 py-12 md:p-24 md:pl-10">
      <ul>
        {links.slice(1).map((link, index) => (
          <li key={link.hash} className="flex items-start ">
            <NavLink
              to={link.hash}
              className={`text-[clamp(50px,2.5rem,70px)] sm:font-big uppercase text-white font-neue font-medium  leading-none 
               ${link.hover}  ${activeSection === link.name ? link.active : ""}`}
              onClick={() => {
                setActiveSection(link.name);
              }}
            >
              {link.name}
            </NavLink>
            <span className="circle-2">{index + 1}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
