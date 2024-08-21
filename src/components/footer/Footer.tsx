import { useSectionInView } from "../../lib/hooks";
import { ContactLinks, FooterLinks } from "../index";

export default function Footer({customStyle} : {customStyle?: string}) {
  const { ref } = useSectionInView("Contact", 0.5);

  return (
    <footer
      ref={ref}
      id="contact"
      className={`-scroll-mt-36 px-[30px] pt-40 md:48 lg:pt-40 pb-2 h-screen  lg:h-screen flex flex-col justify-between lg:justify-end ${customStyle}`}
    >
      <div className="my-auto">
        <ContactLinks />
        <div className="flex flex-col justify-center mb-20 ">
          <p className="font-small">or contact me on</p>
          <a
            href=''
            className="font-medium hover:text-red leading-[0.9]"
            target="_blank"
          >
            LINKEDIN
          </a>
          <a
            href="http://"
            className="font-medium hover:text-red leading-[0.9]"
            target="_blank"
          >
            GITHUB
          </a>
          <a
            href="http://"
            className="font-medium hover:text-red leading-[0.9]"
            target="_blank"
          >
            INSTAGRAM
          </a>
        </div>
      </div>
   
      <FooterLinks />
    </footer>
  );
}
